import React, { useEffect, useState } from 'react';
import { useFormContext } from '../../../../contexts/FormContext';
import { FormQuestion } from './FormQuestion';
import { Button } from '../../../../components/Common/Button';
import { ArrowRight, Save, AlertCircle } from 'lucide-react';
import { validators, errorMessages } from '../../../../utils/validation';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const QuestionsContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`;

const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.primary}15;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  line-height: 1.6;
`;

export const Form: React.FC = () => {
  const { formData, questions, updateFormField, nextStep, saveProgress } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      saveProgress();
    }, 30000);

    return () => clearInterval(autoSaveInterval);
  }, [saveProgress]);

  const validateField = (questionId: string, value: any): string => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return '';

    if (question.required && !validators.required(value)) {
      return errorMessages.required;
    }

    if (question.type === 'textarea' && value) {
      if (value.length < 50) {
        return errorMessages.minLength(50);
      }
      if (value.length > 5000) {
        return errorMessages.maxLength(5000);
      }
    }

    return '';
  };

  const handleChange = (questionId: string, value: any) => {
    updateFormField(questionId, value);

    if (touched[questionId]) {
      const error = validateField(questionId, value);
      setErrors((prev) => ({
        ...prev,
        [questionId]: error,
      }));
    }
  };

  const handleBlur = (questionId: string) => {
    setTouched((prev) => ({ ...prev, [questionId]: true }));
    const value = formData[questionId];
    const error = validateField(questionId, value);
    setErrors((prev) => ({
      ...prev,
      [questionId]: error,
    }));
  };

  const handleNext = () => {
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    questions.forEach((question) => {
      newTouched[question.id] = true;
      const error = validateField(question.id, formData[question.id]);
      if (error) {
        newErrors[question.id] = error;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      saveProgress();
      nextStep();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSave = () => {
    saveProgress();
  };

  return (
    <FormContainer>
      <FormTitle>Report an Incident</FormTitle>
      <FormDescription>
        Please provide as much information as you feel comfortable sharing. All fields marked with an asterisk (*) are required. 
        Your responses are confidential and will be handled with care.
      </FormDescription>

      <InfoBox>
        <AlertCircle size={20} />
        <InfoText>
          Your progress is automatically saved every 30 seconds. You can also manually save and return to complete this form later. 
          No personal information is required unless you choose to provide it.
        </InfoText>
      </InfoBox>

      <QuestionsContainer>
        {questions.map((question) => (
          <FormQuestion
            key={question.id}
            question={question}
            value={formData[question.id]}
            onChange={(value) => handleChange(question.id, value)}
            onBlur={() => handleBlur(question.id)}
            error={touched[question.id] ? errors[question.id] : undefined}
          />
        ))}
      </QuestionsContainer>

      <ButtonGroup>
        <Button variant="outline" leftIcon={<Save size={20} />} onClick={handleSave}>
          Save Progress
        </Button>
        <Button rightIcon={<ArrowRight size={20} />} onClick={handleNext}>
          Continue
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default Form;