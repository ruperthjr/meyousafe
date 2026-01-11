import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import { FormProvider } from '../../contexts/FormContext';

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return React.createElement(
    ThemeProvider as any,
    { theme: lightTheme as unknown as any },
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(FormProvider, { totalSteps: 3, children })
    )
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

export const waitForLoadingToFinish = () =>
  new Promise((resolve) => setTimeout(resolve, 0));

export const mockLocalStorage = () => {
  const store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      Object.keys(store).forEach((key) => delete store[key]);
    },
  };
};

export const createMockFormData = (overrides = {}) => ({
  incidentCategory: 'Verbal Harassment',
  incidentDescription: 'Test incident description',
  incidentDate: '2025-01-11',
  ...overrides,
});

export const createMockQuestion = (overrides = {}) => ({
  id: 'test-question',
  question: 'Test Question?',
  type: 'text' as const,
  required: true,
  ...overrides,
});