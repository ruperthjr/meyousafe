import apiClient from './client';
import endpoints from './endpoints';

export interface ResponseData {
  id?: string;
  formId: string;
  data: Record<string, any>;
  referenceCode?: string;
  status?: 'draft' | 'submitted' | 'reviewed';
  submittedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ResponseListItem {
  id: string;
  formId: string;
  referenceCode: string;
  status: string;
  submittedAt: string;
  createdAt: string;
}

export interface ResponseListResponse {
  data: ResponseListItem[];
  total: number;
  page: number;
  pageSize: number;
}

export interface CreateResponsePayload {
  formId: string;
  data: Record<string, any>;
}

export interface UpdateResponsePayload {
  data?: Record<string, any>;
  status?: 'draft' | 'submitted' | 'reviewed';
}

export const responsesService = {
  async getAll(params?: {
    page?: number;
    pageSize?: number;
    status?: string;
  }): Promise<ResponseListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.pageSize) queryParams.append('pageSize', params.pageSize.toString());
    if (params?.status) queryParams.append('status', params.status);

    const endpoint = endpoints.responses.list();
    const url = queryParams.toString() ? `${endpoint}?${queryParams}` : endpoint;
    
    return apiClient.get<ResponseListResponse>(url);
  },

  async getById(id: string): Promise<ResponseData> {
    return apiClient.get<ResponseData>(endpoints.responses.detail(id));
  },

  async getByReference(referenceCode: string): Promise<ResponseData> {
    return apiClient.get<ResponseData>(endpoints.responses.byReference(referenceCode));
  },

  async create(payload: CreateResponsePayload): Promise<ResponseData> {
    return apiClient.post<ResponseData>(endpoints.responses.create(), payload);
  },

  async update(id: string, payload: UpdateResponsePayload): Promise<ResponseData> {
    return apiClient.patch<ResponseData>(endpoints.responses.update(id), payload);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(endpoints.responses.delete(id));
  },

  async submit(id: string): Promise<ResponseData> {
    return apiClient.post<ResponseData>(`${endpoints.responses.detail(id)}/submit`);
  },
};

export default responsesService;