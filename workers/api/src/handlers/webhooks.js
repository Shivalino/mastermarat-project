// handlers/webhooks.js
import { createErrorResponse, createCorsResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

// Вспомогательная функция для JSON ответов
function createJsonResponse(data, status = 200) {
  return createCorsResponse(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Основной роутер для вебхуков
 */
export async function handleWebhooks(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Разбираем путь: /webhook/sendpulse/subscribe
  const parts = path.split('/').filter(Boolean);

  if (parts.length < 2) {
    return createErrorResponse('Invalid webhook path', 404);
  }

  const service = parts[1]; // sendpulse, monobank
  const event = parts[2] || 'default'; // subscribe, payment, etc.

  try {
    switch (service) {
      case 'sendpulse':
        return await handleSendPulseWebhook(request, env, event);

      case 'monobank':
        return await handleMonobankWebhook(request, env, event);

      default:
        return createErrorResponse(`Unknown webhook service: ${service}`, 404);
    }
  } catch (error) {
    console.error(`Webhook error [${service}/${event}]:`, error);
    return createErrorResponse('Webhook processing failed', 500);
  }
}

/**
 * Обработчик вебхуков SendPulse
 */
async function handleSendPulseWebhook(request, env, eventType) {
  // Проверка метода
  if (request.method !== 'POST') {
    return createErrorResponse('Method not allowed', 405);
  }

  // Проверка секретного ключа (если настроен)
  const secret = env.SENDPULSE_WEBHOOK_SECRET;
  if (secret) {
    const signature = request.headers.get('X-Webhook-Signature');
    if (!signature || signature !== secret) {
      console.warn('Invalid webhook signature');
      return createErrorResponse('Unauthorized', 401);
    }
  }

  // Получаем данные
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return createErrorResponse('Invalid JSON', 400);
  }

  // Логируем событие
  console.log(`SendPulse webhook [${eventType}]:`, JSON.stringify(data));

  // Обрабатываем разные типы событий
  switch (eventType) {
    case 'subscribe':
      return await handleSubscribe(data, env);

    case 'unsubscribe':
    case 'user-unsubscribe':
      return await handleUnsubscribe(data, env);

    case 'hard-bounce':
      return await handleHardBounce(data, env);

    case 'soft-bounce':
      return await handleSoftBounce(data, env);

    case 'spam':
      return await handleSpamReport(data, env);

    case 'open':
      return await handleEmailOpen(data, env);

    case 'click':
      return await handleLinkClick(data, env);

    case 'delivered':
      return await handleDelivered(data, env);

    case 'payment':
      return await handleSendPulsePayment(data, env);

    default:
      console.warn(`Unknown SendPulse event: ${eventType}`);
      return createJsonResponse({
        status: 'success',
        message: `Event ${eventType} received but not processed`
      });
  }
}

/**
 * Обработчик новой подписки
 */
async function handleSubscribe(data, env) {
  const { email, name, phone, variables } = data;

  // Создаем или обновляем пользователя
  const user = {
    email,
    name: name || variables?.name || 'Unknown',
    phone: phone || variables?.phone || '',
    subscribed: true,
    subscribed_at: new Date().toISOString(),
    subscription_type: variables?.subscription_type || 'basic',
    source: 'sendpulse_webhook'
  };

  // Сохраняем в KV (если есть)
  if (env.KV) {
    await env.KV.put(`user:${email}`, JSON.stringify(user), {
      expirationTtl: 60 * 60 * 24 * 90 // 90 дней
    });
  }

  // Если это платная подписка, генерируем токен
  if (variables?.payment_confirmed) {
    const courseId = variables?.course_id || 'course1';
    const token = generateSimpleToken(email, courseId);

    // TODO: Обновить контакт в SendPulse с токеном через API
    console.log(`Generated token for ${email}: ${token}`);

    return createJsonResponse({
      status: 'success',
      message: 'Subscription activated',
      email,
      token_generated: true // В реальности токен отправляется по email
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Subscriber added',
    email
  });
}

/**
 * Обработчик отписки
 */
async function handleUnsubscribe(data, env) {
  const { email } = data;

  // Обновляем статус пользователя
  if (env.KV) {
    const userKey = `user:${email}`;
    const existingUser = await env.KV.get(userKey, 'json');

    if (existingUser) {
      existingUser.subscribed = false;
      existingUser.unsubscribed_at = new Date().toISOString();
      await env.KV.put(userKey, JSON.stringify(existingUser));
    }

    // Инвалидируем токены пользователя
    // Ищем все токены пользователя (в реальности нужен список токенов)
    const tokenPattern = `token:${email}:*`;
    // KV не поддерживает wildcard, нужно хранить список токенов отдельно
  }

  return createJsonResponse({
    status: 'success',
    message: 'User unsubscribed',
    email
  });
}

/**
 * Обработчик жестких отказов (email не существует)
 */
async function handleHardBounce(data, env) {
  const { email, reason } = data;

  // Помечаем email как недействительный
  if (env.KV) {
    const userKey = `user:${email}`;
    const existingUser = await env.KV.get(userKey, 'json');

    if (existingUser) {
      existingUser.email_status = 'invalid';
      existingUser.bounce_reason = reason;
      existingUser.bounced_at = new Date().toISOString();
      await env.KV.put(userKey, JSON.stringify(existingUser));
    }
  }

  return createJsonResponse({
    status: 'success',
    message: 'Hard bounce processed'
  });
}

/**
 * Обработчик мягких отказов (временные проблемы)
 */
async function handleSoftBounce(data, env) {
  const { email, reason } = data;

  // Увеличиваем счетчик soft bounces
  if (env.KV) {
    const key = `analytics:bounce:soft:${email}`;
    const count = (await env.KV.get(key, 'json')) || { count: 0 };
    count.count++;
    count.last_bounce = new Date().toISOString();
    count.last_reason = reason;

    await env.KV.put(key, JSON.stringify(count), {
      expirationTtl: 60 * 60 * 24 * 30 // 30 дней
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Soft bounce logged'
  });
}

/**
 * Обработчик жалоб на спам
 */
async function handleSpamReport(data, env) {
  const { email } = data;

  console.error(`SPAM COMPLAINT from ${email}!`);

  // Критически важно! Немедленно отписываем
  return await handleUnsubscribe(data, env);
}

/**
 * Обработчик открытия письма
 */
async function handleEmailOpen(data, env) {
  const { email, campaign_id, timestamp } = data;

  // Сохраняем для аналитики
  if (env.KV) {
    const key = `analytics:open:${campaign_id}:${email}`;
    await env.KV.put(key, timestamp || new Date().toISOString(), {
      expirationTtl: 60 * 60 * 24 * 90 // 90 дней
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Open tracked'
  });
}

/**
 * Обработчик клика по ссылке
 */
async function handleLinkClick(data, env) {
  const { email, url, campaign_id, timestamp } = data;

  // Сохраняем для аналитики
  if (env.KV) {
    const clickData = {
      email,
      url,
      campaign_id,
      timestamp: timestamp || new Date().toISOString()
    };

    const key = `analytics:click:${campaign_id}:${email}:${Date.now()}`;
    await env.KV.put(key, JSON.stringify(clickData), {
      expirationTtl: 60 * 60 * 24 * 90 // 90 дней
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Click tracked'
  });
}

/**
 * Обработчик успешной доставки
 */
async function handleDelivered(data, env) {
  const { email, campaign_id } = data;

  // Обновляем статус доставки
  if (env.KV) {
    const userKey = `user:${email}`;
    const existingUser = await env.KV.get(userKey, 'json');

    if (existingUser) {
      existingUser.last_email_delivered = new Date().toISOString();
      existingUser.last_campaign_id = campaign_id;
      await env.KV.put(userKey, JSON.stringify(existingUser));
    }
  }

  return createJsonResponse({
    status: 'success',
    message: 'Delivery confirmed'
  });
}

/**
 * Обработчик платежей через SendPulse
 */
async function handleSendPulsePayment(data, env) {
  const {
    email,
    amount,
    currency,
    subscription_type,
    payment_id,
    period_months = 3,
    variables
  } = data;

  // Определяем курс из переменных или по умолчанию
  const courseId = variables?.course_id || 'course1';

  // Генерируем токен доступа
  const token = generateSimpleToken(email, courseId);

  // Рассчитываем дату окончания подписки
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + period_months);

  // Сохраняем информацию о платеже
  if (env.KV) {
    const payment = {
      payment_id,
      email,
      amount,
      currency,
      subscription_type,
      period_months,
      course_id: courseId,
      token,
      created_at: new Date().toISOString(),
      expires_at: expiresAt.toISOString()
    };

    await env.KV.put(`payment:${payment_id}`, JSON.stringify(payment));

    // Обновляем пользователя
    const user = {
      email,
      subscription_type,
      subscription_active: true,
      subscription_expires: expiresAt.toISOString(),
      last_payment_id: payment_id,
      last_payment_date: new Date().toISOString(),
      access_token: token,
      courses_access: [courseId]
    };

    await env.KV.put(`user:${email}`, JSON.stringify(user));

    // Кешируем токен для быстрой проверки
    await env.KV.put(
      `token:${token}`,
      JSON.stringify({
        email,
        subscription_type,
        expires_at: expiresAt.toISOString(),
        courses: [courseId]
      }),
      {
        expirationTtl: 60 * 60 * 24 // 24 часа
      }
    );
  }

  // TODO: Обновить контакт в SendPulse через API с токеном

  return createJsonResponse({
    status: 'success',
    message: 'Payment processed',
    payment_id,
    subscription_activated: true,
    expires_at: expiresAt.toISOString()
  });
}

/**
 * Обработчик вебхуков Monobank
 * Документация: https://api.monobank.ua/docs/acquiring.html
 */
async function handleMonobankWebhook(request, env, eventType) {
  // Проверка метода
  if (request.method !== 'POST') {
    return createErrorResponse('Method not allowed', 405);
  }

  // Проверка подписи X-Sign (если настроена)
  const publicKey = env.MONOBANK_PUBLIC_KEY;
  if (publicKey) {
    const signature = request.headers.get('X-Sign');
    if (!signature) {
      console.warn('Missing Monobank signature');
      return createErrorResponse('Unauthorized', 401);
    }

    // TODO: Реализовать проверку подписи по алгоритму Monobank
    // const isValid = await verifyMonobankSignature(signature, await request.text(), publicKey);
  }

  // Получаем данные
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return createErrorResponse('Invalid JSON', 400);
  }

  console.log(`Monobank webhook [${eventType}]:`, JSON.stringify(data));

  // Обрабатываем статус платежа
  const { invoiceId, status, amount, ccy, reference, email } = data;

  if (status === 'success') {
    // Платеж успешен

    // Определяем тип подписки по сумме (в копейках)
    let subscription_type = 'basic';
    let period_months = 3;

    // Примерные суммы в гривнах * 100 (копейки)
    if (amount >= 500000) {
      // 5000 грн и выше
      subscription_type = 'vip';
    } else if (amount >= 200000) {
      // 2000 грн и выше
      subscription_type = 'standard';
    }

    // Генерируем токен
    const courseId = 'course1'; // Можно передавать в reference
    const token = generateSimpleToken(email || reference, courseId);

    // Сохраняем платеж
    if (env.KV) {
      const payment = {
        payment_id: invoiceId,
        email: email || reference,
        amount: amount / 100, // Конвертируем в гривны
        currency: ccy,
        subscription_type,
        period_months,
        token,
        created_at: new Date().toISOString(),
        source: 'monobank'
      };

      await env.KV.put(`payment:mono:${invoiceId}`, JSON.stringify(payment));

      // TODO: Найти email пользователя по reference и активировать подписку
      // TODO: Отправить уведомление через SendPulse API
    }

    return createJsonResponse({
      status: 'success',
      message: 'Payment confirmed',
      invoiceId
    });
  } else if (status === 'failure' || status === 'reversed') {
    // Платеж отклонен или отменен
    console.error(`Monobank payment failed: ${invoiceId}, status: ${status}`);

    return createJsonResponse({
      status: 'success',
      message: 'Payment failure acknowledged',
      invoiceId
    });
  }

  // Другие статусы (processing, hold, etc)
  return createJsonResponse({
    status: 'success',
    message: `Payment status ${status} received`,
    invoiceId
  });
}
