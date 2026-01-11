import { BaseEntity, PaginatedResponse, ApiResponse } from './common';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ContentType = 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded';

export interface RequestHeaders {
  'Content-Type'?: ContentType;
  Authorization?: string;
  [key: string]: string | undefined;
}

export interface ApiRequestConfig {
  method?: HttpMethod;
  headers?: RequestHeaders;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
  retry?: boolean;
  retryCount?: number;
}

export interface ApiEndpoint {
  path: string;
  method: HttpMethod;
  authenticated?: boolean;
}

export interface ApiErrorResponse {
  status: number;
  statusText: string;
  data?: any;
  message: string;
}

export interface HealthCheckResponse {
  status: 'ok' | 'degraded' | 'down';
  timestamp: string;
  version?: string;
  uptime?: number;
}

export type ApiSuccessResponse<T> = ApiResponse<T> & {
  success: true;
  data: T;
};

export type ApiFailureResponse = ApiResponse<never> & {
  success: false;
  error: ApiErrorResponse;
};

export type ApiResult<T> = ApiSuccessResponse<T> | ApiFailureResponse;

export type {
  BaseEntity,
  PaginatedResponse,
  ApiResponse,
};