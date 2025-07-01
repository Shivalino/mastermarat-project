// handlers/webhooks.js
import { createCorsResponse } from '../utils/cors.js';
import { createBadRequestResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

export async function handleWebhooks(request, env, ctx) {
  try {
    const webhook = await request.json();

    // Генерируем токен для пользователя
    const userToken = generateSimpleToken(
      webhook.email || 'test@example.com',
      webhook.course_id || 'course1'
    );

    // TODO: Обновить контакт в SendPulse через API
    // await updateSendPulseContact(webhook.email, {
    //   access_token: userToken,
    //   purchase_date: new Date().toISOString(),
    //   subscription_type: webhook.subscription_type
    // });

    return createCorsResponse(
      JSON.stringify({
        status: 'success',
        message: 'Webhook processed successfully',
        user_token: userToken,
        received_data: webhook,
        note: 'Token will be sent in first course email'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Webhook processing error:', error);
    return createBadRequestResponse('Invalid webhook data');
  }
}
