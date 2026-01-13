declare global {
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    // add other VITE_... env vars here as needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

export const API_ENDPOINTS = {
  HEALTH: '/health',
  
  FORMS: {
    LIST: '/forms',
    DETAIL: (id: string) => `/forms/${id}`,
    CREATE: '/forms',
    UPDATE: (id: string) => `/forms/${id}`,
    DELETE: (id: string) => `/forms/${id}`,
  },
  
  RESPONSES: {
    LIST: '/responses',
    DETAIL: (id: string) => `/responses/${id}`,
    CREATE: '/responses',
    UPDATE: (id: string) => `/responses/${id}`,
    DELETE: (id: string) => `/responses/${id}`,
    BY_REFERENCE: (refCode: string) => `/responses/reference/${refCode}`,
  },
  
  ANALYTICS: {
    OVERVIEW: '/analytics/overview',
    BY_CATEGORY: '/analytics/by-category',
    BY_TIME: '/analytics/by-time',
    TRENDS: '/analytics/trends',
  },
} as const;

export const API_TIMEOUT = 30000;

export const API_RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000,
  retryableStatuses: [408, 429, 500, 502, 503, 504],
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const;

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const CONTENT_TYPE = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
  URL_ENCODED: 'application/x-www-form-urlencoded',
} as const;

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  API_TIMEOUT,
  API_RETRY_CONFIG,
  HTTP_STATUS,
  HTTP_METHODS,
  CONTENT_TYPE,
};