import { setupServer } from 'msw/node';
import * as handlers from './handlers';

export const server = setupServer(...(Object.values(handlers) as any[]));

export const resetHandlers = () => {
  server.resetHandlers();
};

export const useCustomHandlers = (...customHandlers: any[]) => {
  server.use(...customHandlers);
};