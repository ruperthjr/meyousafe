import { API_BASE_URL, API_TIMEOUT, API_RETRY_CONFIG, HTTP_STATUS } from '../../constants/api';

export interface RequestConfig extends RequestInit {
  timeout?: number;
  retry?: boolean;
  retryCount?: number;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data?: any
  ) {
    super(`API Error: ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}

class ApiClient {
  private baseURL: string;
  private defaultTimeout: number;

  constructor(baseURL: string = API_BASE_URL, timeout: number = API_TIMEOUT) {
    this.baseURL = baseURL;
    this.defaultTimeout = timeout;
  }

  private async fetchWithTimeout(
    url: string,
    config: RequestConfig = {}
  ): Promise<Response> {
    const { timeout = this.defaultTimeout, ...fetchConfig } = config;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchConfig,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError(HTTP_STATUS.GATEWAY_TIMEOUT, 'Request timeout');
      }
      throw error;
    }
  }

  private async fetchWithRetry(
    url: string,
    config: RequestConfig = {}
  ): Promise<Response> {
    const { retry = true, retryCount = 0, ...fetchConfig } = config;

    try {
      const response = await this.fetchWithTimeout(url, fetchConfig);

      if (
        retry &&
        retryCount < API_RETRY_CONFIG.maxRetries &&
        API_RETRY_CONFIG.retryableStatuses.some((s) => s === response.status)
      ) {
        await this.delay(API_RETRY_CONFIG.retryDelay * (retryCount + 1));
        return this.fetchWithRetry(url, {
          ...config,
          retryCount: retryCount + 1,
        });
      }

      return response;
    } catch (error) {
      if (
        retry &&
        retryCount < API_RETRY_CONFIG.maxRetries &&
        error instanceof ApiError &&
        API_RETRY_CONFIG.retryableStatuses.includes(
          error.status as typeof API_RETRY_CONFIG.retryableStatuses[number]
        )
      ) {
        await this.delay(API_RETRY_CONFIG.retryDelay * (retryCount + 1));
        return this.fetchWithRetry(url, {
          ...config,
          retryCount: retryCount + 1,
        });
      }
      throw error;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      const errorData = isJson ? await response.json() : await response.text();
      throw new ApiError(response.status, response.statusText, errorData);
    }

    if (response.status === HTTP_STATUS.NO_CONTENT) {
      return {} as T;
    }

    if (isJson) {
      return response.json();
    }

    return response.text() as T;
  }

  private getHeaders(customHeaders?: HeadersInit): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

    return headers;
  }

  async get<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await this.fetchWithRetry(url, {
      method: 'GET',
      headers: this.getHeaders(config.headers),
      ...config,
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await this.fetchWithRetry(url, {
      method: 'POST',
      headers: this.getHeaders(config.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    return this.handleResponse<T>(response);
  }

  async put<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await this.fetchWithRetry(url, {
      method: 'PUT',
      headers: this.getHeaders(config.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    return this.handleResponse<T>(response);
  }

  async patch<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await this.fetchWithRetry(url, {
      method: 'PATCH',
      headers: this.getHeaders(config.headers),
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await this.fetchWithRetry(url, {
      method: 'DELETE',
      headers: this.getHeaders(config.headers),
      ...config,
    });

    return this.handleResponse<T>(response);
  }

  setBaseURL(url: string): void {
    this.baseURL = url;
  }

  getBaseURL(): string {
    return this.baseURL;
  }
}

export const apiClient = new ApiClient();
export default apiClient;