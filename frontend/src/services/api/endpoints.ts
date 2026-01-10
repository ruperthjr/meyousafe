import { API_ENDPOINTS } from '../../constants/api';

export const endpoints = {
  health: {
    check: () => API_ENDPOINTS.HEALTH,
  },

  forms: {
    list: () => API_ENDPOINTS.FORMS.LIST,
    detail: (id: string) => API_ENDPOINTS.FORMS.DETAIL(id),
    create: () => API_ENDPOINTS.FORMS.CREATE,
    update: (id: string) => API_ENDPOINTS.FORMS.UPDATE(id),
    delete: (id: string) => API_ENDPOINTS.FORMS.DELETE(id),
  },

  responses: {
    list: () => API_ENDPOINTS.RESPONSES.LIST,
    detail: (id: string) => API_ENDPOINTS.RESPONSES.DETAIL(id),
    create: () => API_ENDPOINTS.RESPONSES.CREATE,
    update: (id: string) => API_ENDPOINTS.RESPONSES.UPDATE(id),
    delete: (id: string) => API_ENDPOINTS.RESPONSES.DELETE(id),
    byReference: (refCode: string) => API_ENDPOINTS.RESPONSES.BY_REFERENCE(refCode),
  },

  analytics: {
    overview: () => API_ENDPOINTS.ANALYTICS.OVERVIEW,
    byCategory: () => API_ENDPOINTS.ANALYTICS.BY_CATEGORY,
    byTime: () => API_ENDPOINTS.ANALYTICS.BY_TIME,
    trends: () => API_ENDPOINTS.ANALYTICS.TRENDS,
  },
};

export default endpoints;