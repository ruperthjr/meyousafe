import apiClient from './client';
import endpoints from './endpoints';
import { FormQuestion } from '../../contexts/FormContext';

export interface FormData {
  id: string;
  title: string;
  description?: string;
  questions: FormQuestion[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FormListItem {
  id: string;
  title: string;
  description?: string;
  questionCount: number;
  responseCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface FormListResponse {
  data: FormListItem[];
  total: number;
  page: number;
  pageSize: number;
}

export interface CreateFormPayload {
  title: string;
  description?: string;
  questions: FormQuestion[];
  isActive?: boolean;
}

export interface UpdateFormPayload {
  title?: string;
  description?: string;
  questions?: FormQuestion[];
  isActive?: boolean;
}

export const formsService = {
  async getAll(params?: {
    page?: number;
    pageSize?: number;
    isActive?: boolean;
  }): Promise<FormListResponse> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.pageSize) queryParams.append('pageSize', params.pageSize.toString());
    if (params?.isActive !== undefined) {
      queryParams.append('isActive', params.isActive.toString());
    }

    const endpoint = endpoints.forms.list();
    const url = queryParams.toString() ? `${endpoint}?${queryParams}` : endpoint;
    
    return apiClient.get<FormListResponse>(url);
  },

  async getById(id: string): Promise<FormData> {
    return apiClient.get<FormData>(endpoints.forms.detail(id));
  },

  async getActive(): Promise<FormData> {
    return apiClient.get<FormData>(`${endpoints.forms.list()}/active`);
  },

  async create(payload: CreateFormPayload): Promise<FormData> {
    return apiClient.post<FormData>(endpoints.forms.create(), payload);
  },

  async update(id: string, payload: UpdateFormPayload): Promise<FormData> {
    return apiClient.patch<FormData>(endpoints.forms.update(id), payload);
  },

  async delete(id: string): Promise<void> {
    return apiClient.delete<void>(endpoints.forms.delete(id));
  },

  async duplicate(id: string): Promise<FormData> {
    return apiClient.post<FormData>(`${endpoints.forms.detail(id)}/duplicate`);
  },

  async activate(id: string): Promise<FormData> {
    return apiClient.post<FormData>(`${endpoints.forms.detail(id)}/activate`);
  },

  async deactivate(id: string): Promise<FormData> {
    return apiClient.post<FormData>(`${endpoints.forms.detail(id)}/deactivate`);
  },
};

export default formsService;