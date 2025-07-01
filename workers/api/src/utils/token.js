// utils/token.js
export function generateSimpleToken(email, courseId = null) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  
  const coursePrefix = courseId ? ${courseId}_ : '';
  return ${emailHash}_;
}

export function validateTokenFormat(token) {
  // Простая валидация формата токена
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Извлекаем информацию из токена
  const parts = token.split('_');
  return {
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}
