// services/auth.js
import { validateTokenFormat, parseTokenInfo } from '../utils/token.js';

export async function checkTokenAccess(token, courseId, lessonId) {
  if (!validateTokenFormat(token)) {
    return { valid: false, reason: 'Invalid token format' };
  }

  const tokenInfo = parseTokenInfo(token);
  
  // TODO: Проверка через SendPulse API
  // Пока простая проверка для демо
  if (token === 'demo123' || token === 'demo-token-123') {
    return { valid: true, demo: true };
  }

  // Проверяем что токен для правильного курса
  if (tokenInfo.courseId && tokenInfo.courseId !== courseId) {
    return { valid: false, reason: 'Token for different course' };
  }

  return { valid: true };
}

export async function getUserFromToken(token) {
  const tokenInfo = parseTokenInfo(token);
  
  // TODO: Получить email из SendPulse по хешу
  return {
    email: 'user@example.com',
    subscription: 'standard',
    courses: ['course1']
  };
}
