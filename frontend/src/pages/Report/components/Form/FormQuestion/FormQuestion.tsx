import React, { ChangeEvent } from 'react';
import { FormQuestion as FormQuestionType } from '../../../../../contexts/FormContext';
import {
  QuestionContainer,
  QuestionLabel,
  RequiredIndicator,
  HelperText,
  Input,
  TextArea,
  Select,
  RadioGroup,
  RadioOption,
  RadioInput,
  RadioLabel,
  CheckboxGroup,
  CheckboxOption,
  CheckboxInput,
  CheckboxLabel,
  ErrorText,
} from './FormQuestion.styles';

export interface FormQuestionProps {
  question: FormQuestionType;
  value: any;
  onChange: (value: any) => void;
  error?: string;
  onBlur?: () => void;
}

export const FormQuestion: React.FC<FormQuestionProps> = ({
  question,
  value,
  onChange,
  error,
  onBlur,
}) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    onChange(e.target.value);
  };

  const handleCheckboxChange = (option: string) => {
    const currentValues = Array.isArray(value) ? value : [];
    const newValues = currentValues.includes(option)
      ? currentValues.filter((v) => v !== option)
      : [...currentValues, option];
    onChange(newValues);
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            type="text"
            id={question.id}
            value={value || ''}
            onChange={handleInputChange}
            onBlur={onBlur}
            placeholder={question.placeholder}
            $hasError={!!error}
          />
        );

      case 'textarea':
        return (
          <TextArea
            id={question.id}
            value={value || ''}
            onChange={handleInputChange}
            onBlur={onBlur}
            placeholder={question.placeholder}
            rows={6}
            $hasError={!!error}
          />
        );

      case 'select':
        return (
          <Select
            id={question.id}
            value={value || ''}
            onChange={handleInputChange}
            onBlur={onBlur}
            $hasError={!!error}
          >
            <option value="">Select an option</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        );

      case 'radio':
        return (
          <RadioGroup>
            {question.options?.map((option) => (
              <RadioOption key={option}>
                <RadioInput
                  type="radio"
                  id={`${question.id}-${option}`}
                  name={question.id}
                  value={option}
                  checked={value === option}
                  onChange={handleInputChange}
                  onBlur={onBlur}
                />
                <RadioLabel htmlFor={`${question.id}-${option}`}>
                  {option}
                </RadioLabel>
              </RadioOption>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        return (
          <CheckboxGroup>
            {question.options?.map((option) => (
              <CheckboxOption key={option}>
                <CheckboxInput
                  type="checkbox"
                  id={`${question.id}-${option}`}
                  value={option}
                  checked={Array.isArray(value) && value.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  onBlur={onBlur}
                />
                <CheckboxLabel htmlFor={`${question.id}-${option}`}>
                  {option}
                </CheckboxLabel>
              </CheckboxOption>
            ))}
          </CheckboxGroup>
        );

      case 'date':
        return (
          <Input
            type="date"
            id={question.id}
            value={value || ''}
            onChange={handleInputChange}
            onBlur={onBlur}
            max={new Date().toISOString().split('T')[0]}
            $hasError={!!error}
          />
        );

      case 'time':
        return (
          <Input
            type="time"
            id={question.id}
            value={value || ''}
            onChange={handleInputChange}
            onBlur={onBlur}
            $hasError={!!error}
          />
        );

      default:
        return null;
    }
  };

  return (
    <QuestionContainer>
      <QuestionLabel htmlFor={question.id}>
        {question.question}
        {question.required && <RequiredIndicator>*</RequiredIndicator>}
      </QuestionLabel>
      {question.helperText && <HelperText>{question.helperText}</HelperText>}
      {renderInput()}
      {error && <ErrorText>{error}</ErrorText>}
    </QuestionContainer>
  );
};

export default FormQuestion;