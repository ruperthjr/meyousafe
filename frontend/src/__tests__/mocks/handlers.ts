import { http, HttpResponse } from 'msw';
import { API_BASE_URL } from '../../constants/api';

type CreateResponseBody = {
  formId: string;
  data: any;
};

export const handlers = [
  http.get(`${API_BASE_URL}/health`, () => {
    return HttpResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    });
  }),

  http.get(`${API_BASE_URL}/forms`, () => {
    return HttpResponse.json({
      data: [
        {
          id: 'form-1',
          title: 'Harassment Report Form',
          description: 'Report sexual harassment incidents',
          questionCount: 10,
          responseCount: 25,
          isActive: true,
          createdAt: '2025-01-11T00:00:00Z',
        },
      ],
      total: 1,
      page: 1,
      pageSize: 10,
    });
  }),

  http.get(`${API_BASE_URL}/forms/active`, () => {
    return HttpResponse.json({
      id: 'form-1',
      title: 'Harassment Report Form',
      description: 'Report sexual harassment incidents',
      questions: [
        {
          id: 'q1',
          question: 'What type of harassment occurred?',
          type: 'select',
          required: true,
          options: ['Verbal', 'Physical', 'Visual', 'Digital'],
        },
      ],
      isActive: true,
      submittedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }),

  http.post(`${API_BASE_URL}/responses`, async ({ request }: { request: Request }) => {
    const body = (await request.json()) as CreateResponseBody;
    return HttpResponse.json({
      id: 'response-1',
      formId: body.formId,
      data: body.data,
      referenceCode: 'TEST-1234',
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }, { status: 201 });
  }),

  http.get(`${API_BASE_URL}/responses/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      formId: 'form-1',
      data: {
        incidentCategory: 'Verbal Harassment',
        incidentDescription: 'Test description',
      },
      referenceCode: 'TEST-1234',
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }),

  http.get(`${API_BASE_URL}/responses/reference/:refCode`, ({ params }) => {
    return HttpResponse.json({
      id: 'response-1',
      formId: 'form-1',
      data: {
        incidentCategory: 'Verbal Harassment',
        incidentDescription: 'Test description',
      },
      referenceCode: params.refCode,
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }),

  http.get(`${API_BASE_URL}/analytics/overview`, () => {
    return HttpResponse.json({
      totalResponses: 100,
      responsesByCategory: {
        'Verbal Harassment': 45,
        'Physical Harassment': 30,
        'Visual Harassment': 15,
        'Digital Harassment': 10,
      },
      responsesByLocation: {
        Workplace: 60,
        School: 20,
        'Public Transport': 10,
        Online: 10,
      },
      responsesByTime: [
        { date: '2025-01-11', count: 5 },
        { date: '2025-01-12', count: 8 },
        { date: '2025-01-13', count: 12 },
      ],
    });
  }),
];