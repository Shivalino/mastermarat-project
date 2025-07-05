// config/constants.js
export const API_VERSION = '1.0.0';

// Токены для тестирования
export const TEST_TOKENS = {
  // SuperUser - полный доступ ко всему
  SUPER_USER: 'superuser_mastermarat_2025',

  // Токены по типам подписки
  VIP_USER: 'vip_test_token_2025',
  STANDARD_USER: 'standard_test_token_2025',
  BASIC_USER: 'basic_test_token_2025',

  // Специальные токены
  DEMO_USER: 'demo123',
  EXPIRED_USER: 'expired_test_token',
  INVALID_USER: 'invalid_token'
};

// Права доступа по типам токенов
export const TOKEN_PERMISSIONS = {
  [TEST_TOKENS.SUPER_USER]: {
    type: 'superuser',
    access: 'all',
    courses: ['*'],
    features: ['player', 'archive', 'download', 'admin'],
    expires: '2099-12-31'
  },
  [TEST_TOKENS.VIP_USER]: {
    type: 'vip',
    access: 'full',
    courses: [
      'course01',
      'course02',
      'course03',
      'course04',
      'course05',
      'course06',
      'course07',
      'course08'
    ],
    features: ['player', 'archive', 'consultation'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.STANDARD_USER]: {
    type: 'standard',
    access: 'standard',
    courses: ['course01'],
    features: ['player', 'archive'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.BASIC_USER]: {
    type: 'basic',
    access: 'basic',
    courses: ['course01'],
    features: ['player'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.DEMO_USER]: {
    type: 'demo',
    access: 'limited',
    courses: ['course01', 'course00'], // Добавлен доступ к демо-курсу
    features: ['player'],
    expires: '2025-07-31'
  },
  [TEST_TOKENS.EXPIRED_USER]: {
    type: 'expired',
    access: 'none',
    courses: [],
    features: [],
    expires: '2024-12-31'
  }
};

// URL конфигурация
export const API_CONFIG = {
  CORS_ORIGIN: '*',
  CACHE_TTL: 3600,
  VIDEO_CHUNK_SIZE: 1024 * 1024, // 1MB chunks
  MAX_RANGE_SIZE: 10 * 1024 * 1024 // 10MB max range
};

// Публичные курсы (доступны без токена)
export const PUBLIC_COURSES = ['course00'];

// Публичные уроки (доступны без токена)
export const PUBLIC_LESSONS = {
  course00: ['demo001', 'demo002', 'demo003'] // Список демо-уроков
};
