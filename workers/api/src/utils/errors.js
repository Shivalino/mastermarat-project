// utils/errors.js
import { createCorsResponse } from './cors.js';

export function createErrorResponse(error, status = 500, extra = {}) {
  return createCorsResponse(
    JSON.stringify({
      status: 'error',
      error: error,
      timestamp: new Date().toISOString(),
      ...extra
    }),
    {
      status,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(
    ${resource} not found,
    404,
    { resource }
  );
}

export function createUnauthorizedResponse(message = 'Unauthorized') {
  return createErrorResponse(message, 401);
}

export function createBadRequestResponse(message = 'Bad Request') {
  return createErrorResponse(message, 400);
}
