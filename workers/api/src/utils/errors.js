// utils/errors.js
import { CORS_HEADERS } from './cors.js';

export function createErrorResponse(message, status = 400, details = null) {
  const body = {
    status: 'error',
    message,
    ...(details && { details })
  };
  
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(`${resource} not found`, 404);
}

export function createUnauthorizedResponse(reason = 'Unauthorized') {
  return createErrorResponse(reason, 401);
}

export { createCorsResponse } from './cors.js';
export function createBadRequestResponse(message, details = null) {
  return createErrorResponse(message, 400, details);
}
