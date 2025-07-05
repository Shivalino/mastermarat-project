// utils/token.js
import { PUBLIC_COURSES, PUBLIC_LESSONS } from '../config/constants.js';
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

/**
 * Генерирует токен доступа на основе email и курса
 * @param {string} email - Email пользователя
 * @param {string|null} courseId - ID курса (опционально)
 * @returns {string} Сгенерированный токен
 */
export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

/**
 * Проверяет формат токена
 * @param {string} token - Токен для проверки
 * @returns {boolean} true если токен валидный
 */
export function validateTokenFormat(token) {
  // Проверяем тестовые токены
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }

  // Проверяем формат обычных токенов
  return token && token.length >= 3 && token.includes('_');
}

/**
 * Парсит информацию из токена
 * @param {string} token - Токен для парсинга
 * @returns {Object} Объект с информацией о токене
 * @returns {boolean} returns.isTestToken - Является ли токен тестовым
 * @returns {Object} returns.permissions - Права доступа (для тестовых токенов)
 * @returns {string} returns.emailHash - Хеш email (для обычных токенов)
 * @returns {string|null} returns.courseId - ID курса (для обычных токенов)
 * @returns {string} returns.timestamp - Временная метка (для обычных токенов)
 */
export function parseTokenInfo(token) {
  // Для тестовых токенов возвращаем их права
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }

  // Для обычных токенов парсим структуру
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

/**
 * Проверяет доступ токена к курсу и функции
 * @param {string} token - Токен доступа
 * @param {string} courseId - ID курса (например, 'course01')
 * @param {string} [feature='player'] - Функция для проверки ('player', 'archive', 'download')
 * @returns {{allowed: boolean, reason?: string, permissions?: Object}} Результат проверки
 */
export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);

  // Для тестовых токенов проверяем права
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;

    // Проверяем не истек ли токен
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }

    // SuperUser имеет доступ ко всему
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }

    // Проверяем доступ к курсу
    const hasCourseAccess =
      perms.courses.includes('*') || perms.courses.includes(courseId);

    // Проверяем доступ к функции
    const hasFeatureAccess = perms.features.includes(feature);

    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }

    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }

    return { allowed: true, permissions: perms };
  }

  // Для обычных токенов - простая проверка
  // TODO: интеграция с SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}

/**
 * Генерирует простой токен без привязки к email
 * @returns {string} Случайный токен
 */
export function generateSimpleToken() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Проверяет публичный доступ к курсу или уроку
 * @param {string} courseId - ID курса
 * @param {string|null} [lessonId=null] - ID урока (опционально)
 * @returns {boolean} true если доступ публичный
 */
export function isPublicAccess(courseId, lessonId = null) {
  // Проверяем, является ли курс публичным
  if (PUBLIC_COURSES.includes(courseId)) {
    // Если указан урок, проверяем его в списке публичных
    if (lessonId) {
      const publicLessons = PUBLIC_LESSONS[courseId] || [];
      return publicLessons.includes(lessonId);
    }
    return true;
  }
  return false;
}
