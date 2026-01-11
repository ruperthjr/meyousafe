export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type ID = string;

export type Timestamp = string;

export interface BaseEntity {
  id: ID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingState {
  status: Status;
  error: Nullable<string>;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ValueOf<T> = T[keyof T];

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface KeyValuePair<T = string> {
  key: string;
  value: T;
};