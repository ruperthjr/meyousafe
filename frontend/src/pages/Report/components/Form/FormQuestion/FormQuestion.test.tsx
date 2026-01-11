import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FormQuestion } from './FormQuestion';
import { FormQuestion as FormQuestionType } from '../../../../../contexts/FormContext';
import { lightTheme } from '../../../../../styles/theme';

const mockOnChange = vi.fn();
const mockOnBlur = vi.fn();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={lightTheme as any}>{component}</ThemeProvider>
  );
};

describe('FormQuestion', () => {
  it('renders text input correctly', () => {
    const question: FormQuestionType = {
      id: 'test-text',
      question: 'What is your name?',
      type: 'text',
      required: true,
      placeholder: 'Enter your name',
    };

    renderWithTheme(
      <FormQuestion question={question} value="" onChange={mockOnChange} />
    );

    expect(screen.getByText('What is your name?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders textarea correctly', () => {
    const question: FormQuestionType = {
      id: 'test-textarea',
      question: 'Describe the incident',
      type: 'textarea',
      required: true,
      helperText: 'Please provide as much detail as possible',
    };

    renderWithTheme(
      <FormQuestion question={question} value="" onChange={mockOnChange} />
    );

    expect(screen.getByText('Describe the incident')).toBeInTheDocument();
    expect(screen.getByText('Please provide as much detail as possible')).toBeInTheDocument();
  });

  it('renders select with options', () => {
    const question: FormQuestionType = {
      id: 'test-select',
      question: 'Select category',
      type: 'select',
      required: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
    };

    renderWithTheme(
      <FormQuestion question={question} value="" onChange={mockOnChange} />
    );

    expect(screen.getByText('Select category')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('renders radio buttons', () => {
    const question: FormQuestionType = {
      id: 'test-radio',
      question: 'Choose one',
      type: 'radio',
      required: true,
      options: ['Yes', 'No'],
    };

    renderWithTheme(
      <FormQuestion question={question} value="" onChange={mockOnChange} />
    );

    const radioInputs = screen.getAllByRole('radio');
    expect(radioInputs).toHaveLength(2);
  });

  it('renders checkboxes', () => {
    const question: FormQuestionType = {
      id: 'test-checkbox',
      question: 'Select all that apply',
      type: 'checkbox',
      required: false,
      options: ['Option A', 'Option B', 'Option C'],
    };

    renderWithTheme(
      <FormQuestion question={question} value={[]} onChange={mockOnChange} />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
  });

  it('displays error message', () => {
    const question: FormQuestionType = {
      id: 'test-error',
      question: 'Test question',
      type: 'text',
      required: true,
    };

    renderWithTheme(
      <FormQuestion
        question={question}
        value=""
        onChange={mockOnChange}
        error="This field is required"
      />
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('calls onChange when text input changes', () => {
    const question: FormQuestionType = {
      id: 'test-change',
      question: 'Test',
      type: 'text',
      required: true,
    };

    renderWithTheme(
      <FormQuestion question={question} value="" onChange={mockOnChange} />
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New value' } });

    expect(mockOnChange).toHaveBeenCalledWith('New value');
  });

  it('calls onBlur when input loses focus', () => {
    const question: FormQuestionType = {
      id: 'test-blur',
      question: 'Test',
      type: 'text',
      required: true,
    };

    renderWithTheme(
      <FormQuestion
        question={question}
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const input = screen.getByRole('textbox');
    fireEvent.blur(input);

    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('handles checkbox selection correctly', () => {
    const question: FormQuestionType = {
      id: 'test-checkbox-select',
      question: 'Select options',
      type: 'checkbox',
      required: false,
      options: ['A', 'B', 'C'],
    };

    renderWithTheme(
      <FormQuestion question={question} value={['A']} onChange={mockOnChange} />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    expect(mockOnChange).toHaveBeenCalledWith(['A', 'B']);
  });
});