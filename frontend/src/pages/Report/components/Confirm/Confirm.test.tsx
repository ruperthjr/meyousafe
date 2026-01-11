import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Confirm } from './Confirm';
import { FormProvider } from '../../../../contexts/FormContext';
import { lightTheme } from '../../../../styles/theme';

const mockNextStep = vi.fn();
const mockPreviousStep = vi.fn();

const mockQuestions = [
  {
    id: 'q1',
    question: 'What happened?',
    type: 'textarea' as const,
    required: true,
  },
  {
    id: 'q2',
    question: 'When did this occur?',
    type: 'date' as const,
    required: true,
  },
];

const mockFormData = {
  q1: 'Test incident description',
  q2: '2025-01-01',
};

vi.mock('../../../../contexts/FormContext', async () => {
  const actual = await vi.importActual('../../../../contexts/FormContext');
  return {
    ...actual,
    useFormContext: () => ({
      formData: mockFormData,
      questions: mockQuestions,
      reportId: 'TEST-1234',
      nextStep: mockNextStep,
      previousStep: mockPreviousStep,
      currentStep: 2,
      totalSteps: 3,
    }),
  };
});
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={lightTheme as unknown as DefaultTheme}>
      <FormProvider totalSteps={3}>{component}</FormProvider>
    </ThemeProvider>
  );
};

describe('Confirm', () => {
  it('renders reference code', () => {
    renderWithTheme(<Confirm />);
    expect(screen.getByText('Your Reference Code')).toBeInTheDocument();
    expect(screen.getByText('TEST-1234')).toBeInTheDocument();
  });

  it('displays all form data for review', () => {
    renderWithTheme(<Confirm />);
    expect(screen.getByText('What happened?')).toBeInTheDocument();
    expect(screen.getByText('Test incident description')).toBeInTheDocument();
    expect(screen.getByText('When did this occur?')).toBeInTheDocument();
    expect(screen.getByText('2025-01-01')).toBeInTheDocument();
  });

  it('calls previousStep when Back button is clicked', () => {
    renderWithTheme(<Confirm />);
    const backButton = screen.getByText('Back to Edit');
    fireEvent.click(backButton);
    expect(mockPreviousStep).toHaveBeenCalled();
  });

  it('calls nextStep when Submit button is clicked', () => {
    renderWithTheme(<Confirm />);
    const submitButton = screen.getByText('Submit Report');
    fireEvent.click(submitButton);
    expect(mockNextStep).toHaveBeenCalled();
  });

  it('displays warning about saving reference code', () => {
    renderWithTheme(<Confirm />);
    expect(screen.getByText(/Please save your reference code/i)).toBeInTheDocument();
  });
});