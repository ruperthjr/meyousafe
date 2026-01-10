import { apiClient, ApiError } from './api/client';
export type { RequestConfig } from './api/client';
export { apiClient, ApiError };

import endpoints from './api/endpoints';
export { endpoints };

import { responsesService } from './api/responses';
export type {
  ResponseData,
  ResponseListItem,
  ResponseListResponse,
  CreateResponsePayload,
  UpdateResponsePayload,
} from './api/responses';
export { responsesService };

import { formsService } from './api/forms';
export type {
  FormData,
  FormListItem,
  FormListResponse,
  CreateFormPayload,
  UpdateFormPayload,
} from './api/forms';
export { formsService };

import { localStorageService, LocalStorageService } from './storage/localStorage';
export { localStorageService, LocalStorageService };

export default {
  api: {
    client: apiClient,
    endpoints,
    responses: responsesService,
    forms: formsService,
  },
  storage: {
    local: localStorageService,
  },
};