// config/constants.js
export const API_VERSION = '1.0.0';
export const SUPPORTED_VIDEO_FORMATS = ['mp4', 'webm'];
export const SUPPORTED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'webp'];

export const ENDPOINTS = {
  API_DOC: '/',
  PLAYER_LEARNING: '/player',
  PLAYER_ARCHIVE: '/archive', 
  THUMBNAILS: '/thumbnails',
  VIDEO: '/video',
  WEBHOOK: '/webhook/purchase'
};

export const ERROR_MESSAGES = {
  TOKEN_REQUIRED: 'Token required',
  TOKEN_INVALID: 'Invalid token',
  VIDEO_NOT_FOUND: 'Video not found',
  COURSE_NOT_FOUND: 'Course not found',
  LESSON_NOT_FOUND: 'Lesson not found'
};
