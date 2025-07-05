// handlers/webhooks.js
import { createErrorResponse, createJsonResponse } from '../utils/errors.js';
import { generateAccessToken } from '../utils/token.js';

/**
 * Основной роутер для вебхуков
 */
export async function handleWebhook(request, env, path) {
  // Разбираем путь: /webhook/sendpulse/subscribe
  const parts = path.split('/').filter(Boolean);

  if (parts.length < 2) {
    return createErrorResponse('Invalid webhook path', 404);
  }

  const service = parts[1]; // sendpulse, monobank, fondy
  const event = parts[2] || 'default'; // subscribe, unsubscribe, etc.

  try {
    switch (service) {
      case 'sendpulse':
        return await handleSendPulseWebhook(request, env, event);

      case 'monobank':
        return await handleMonobankWebhook(request, env);

      case 'fondy':
        return await handleFondyWebhook(request, env);

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
      return await handlePayment(data, env);

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
  if (env.USERS) {
    await env.USERS.put(`user:${email}`, JSON.stringify(user));
  }

  // Если это платная подписка, генерируем токен
  if (variables?.payment_confirmed) {
    const token = await generateAccessToken(email, {
      subscription_type: user.subscription_type,
      expires_in_days: 90
    });

    // Отправляем приветственное письмо с токеном
    // TODO: Интегрировать с SendPulse API для отправки письма

    return createJsonResponse({
      status: 'success',
      message: 'Subscription activated',
      token // В реальности токен отправляется по email
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
  if (env.USERS) {
    const userKey = `user:${email}`;
    const existingUser = await env.USERS.get(userKey);

    if (existingUser) {
      const user = JSON.parse(existingUser);
      user.subscribed = false;
      user.unsubscribed_at = new Date().toISOString();
      await env.USERS.put(userKey, JSON.stringify(user));
    }
  }

  // Деактивируем токены пользователя
  if (env.TOKENS) {
    const tokenKey = `token:${email}:*`;
    // В реальном проекте нужен более сложный механизм отзыва токенов
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
  if (env.USERS) {
    const userKey = `user:${email}`;
    const existingUser = await env.USERS.get(userKey);

    if (existingUser) {
      const user = JSON.parse(existingUser);
      user.email_status = 'invalid';
      user.bounce_reason = reason;
      user.bounced_at = new Date().toISOString();
      await env.USERS.put(userKey, JSON.stringify(user));
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
  if (env.ANALYTICS) {
    await env.ANALYTICS.put(`bounce:soft:${email}`, new Date().toISOString());
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

  // Критически важно! Немедленно отписываем
  return await handleUnsubscribe(data, env);
}

/**
 * Обработчик открытия письма
 */
async function handleEmailOpen(data, env) {
  const { email, campaign_id, timestamp } = data;

  // Сохраняем для аналитики
  if (env.ANALYTICS) {
    await env.ANALYTICS.put(
      `open:${campaign_id}:${email}`,
      timestamp || new Date().toISOString()
    );
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
  if (env.ANALYTICS) {
    const clickData = {
      email,
      url,
      campaign_id,
      timestamp: timestamp || new Date().toISOString()
    };

    await env.ANALYTICS.put(
      `click:${campaign_id}:${email}:${Date.now()}`,
      JSON.stringify(clickData)
    );
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
  if (env.USERS) {
    const userKey = `user:${email}`;
    const existingUser = await env.USERS.get(userKey);

    if (existingUser) {
      const user = JSON.parse(existingUser);
      user.last_email_delivered = new Date().toISOString();
      await env.USERS.put(userKey, JSON.stringify(user));
    }
  }

  return createJsonResponse({
    status: 'success',
    message: 'Delivery confirmed'
  });
}

/**
 * Обработчик платежей (если настроен в SendPulse)
 */
async function handlePayment(data, env) {
  const {
    email,
    amount,
    currency,
    subscription_type,
    payment_id,
    period_months = 3
  } = data;

  // Генерируем токен доступа
  const expiresInDays = period_months * 30;
  const token = await generateAccessToken(email, {
    subscription_type,
    payment_id,
    expires_in_days: expiresInDays
  });

  // Сохраняем информацию о платеже
  if (env.PAYMENTS) {
    const payment = {
      payment_id,
      email,
      amount,
      currency,
      subscription_type,
      period_months,
      token,
      created_at: new Date().toISOString()
    };

    await env.PAYMENTS.put(`payment:${payment_id}`, JSON.stringify(payment));
  }

  // Обновляем пользователя
  if (env.USERS) {
    const userKey = `user:${email}`;
    const user = {
      email,
      subscription_type,
      subscription_active: true,
      subscription_expires: new Date(
        Date.now() + expiresInDays * 24 * 60 * 60 * 1000
      ).toISOString(),
      last_payment_id: payment_id,
      last_payment_date: new Date().toISOString()
    };

    await env.USERS.put(userKey, JSON.stringify(user));
  }

  // TODO: Отправить email с токеном через SendPulse API

  return createJsonResponse({
    status: 'success',
    message: 'Payment processed',
    payment_id,
    subscription_activated: true
  });
}

/**
 * Заглушки для других платежных систем
 */
async function handleMonobankWebhook(request, env) {
  // TODO: Implement Monobank webhook
  return createJsonResponse({
    status: 'success',
    message: 'Monobank webhook received'
  });
}

async function handleFondyWebhook(request, env) {
  // TODO: Implement Fondy webhook
  return createJsonResponse({
    status: 'success',
    message: 'Fondy webhook received'
  });
}
