import styled from 'styled-components';

export const QuestionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const QuestionLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

export const HelperText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-style: italic;
`;

const inputStyles = `
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid;
  transition: all 0.2s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px;
  }
  
  &::placeholder {
    opacity: 0.5;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  ${inputStyles}
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.primary : theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.primary : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) =>
      $hasError ? theme.colors.primary : theme.colors.primary}20;
  }
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
  ${inputStyles}
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.primary : theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.primary : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) =>
      $hasError ? theme.colors.primary : theme.colors.primary}20;
  }
`;

export const Select = styled.select<{ $hasError?: boolean }>`
  ${inputStyles}
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.primary : theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.primary : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) =>
      $hasError ? theme.colors.primary : theme.colors.primary}20;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const RadioLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  user-select: none;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CheckboxOption = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  user-select: none;
`;

export const ErrorText = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;