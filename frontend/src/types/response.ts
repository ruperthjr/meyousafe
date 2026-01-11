import { BaseEntity, ID } from './common';
import { FormData, FormSubmissionStatus } from './form';

export interface Response extends BaseEntity {
  formId: ID;
  data: FormData;
  referenceCode: string;
  status: ResponseStatus;
  submittedAt?: string;
  reviewedAt?: string;
  reviewedBy?: ID;
  notes?: string;
  tags?: string[];
  priority?: ResponsePriority;
}

export type ResponseStatus = FormSubmissionStatus;

export type ResponsePriority = 'low' | 'medium' | 'high' | 'urgent';

export interface ResponseListItem {
  id: ID;
  formId: ID;
  referenceCode: string;
  status: ResponseStatus;
  priority?: ResponsePriority;
  submittedAt: string;
  createdAt: string;
}

export interface CreateResponsePayload {
  formId: ID;
  data: FormData;
  status?: ResponseStatus;
}

export interface UpdateResponsePayload {
  data?: FormData;
  status?: ResponseStatus;
  notes?: string;
  tags?: string[];
  priority?: ResponsePriority;
}

export interface ResponseFilter {
  status?: ResponseStatus;
  priority?: ResponsePriority;
  formId?: ID;
  dateFrom?: string;
  dateTo?: string;
  tags?: string[];
  search?: string;
}

export interface ResponseStats {
  total: number;
  byStatus: Record<ResponseStatus, number>;
  byPriority: Record<ResponsePriority, number>;
  recentCount: number;
}

export interface ResponseAnalytics {
  totalResponses: number;
  responsesByCategory: Record<string, number>;
  responsesByLocation: Record<string, number>;
  responsesByTime: {
    date: string;
    count: number;
  }[];
  averageResponseTime?: number;
}

export default {
  Response
};