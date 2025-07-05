// utils/token.js
import { PUBLIC_COURSES, PUBLIC_LESSONS } from '../config/constants.js';
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕРІРµСЂСЏРµРј С‚РµСЃС‚РѕРІС‹Рµ С‚РѕРєРµРЅС‹
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }

  // РџСЂРѕРІРµСЂСЏРµРј С„РѕСЂРјР°С‚ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РІРѕР·РІСЂР°С‰Р°РµРј РёС… РїСЂР°РІР°
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }

  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ РїР°СЂСЃРёРј СЃС‚СЂСѓРєС‚СѓСЂСѓ
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);

  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РїСЂРѕРІРµСЂСЏРµРј РїСЂР°РІР°
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;

    // РџСЂРѕРІРµСЂСЏРµРј РЅРµ РёСЃС‚РµРє Р»Рё С‚РѕРєРµРЅ
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }

    // SuperUser РёРјРµРµС‚ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }

    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє РєСѓСЂСЃСѓ
    const hasCourseAccess =
      perms.courses.includes('*') || perms.courses.includes(courseId);

    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє С„СѓРЅРєС†РёРё
    const hasFeatureAccess = perms.features.includes(feature);

    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }

    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }

    return { allowed: true, permissions: perms };
  }

  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ - РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР°
  // TODO: РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}
export function generateSimpleToken() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
// Функция проверки публичного доступа
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
