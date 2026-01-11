import React from 'react';
import { useFormContext } from '../../../../contexts/FormContext';
import { Button } from '../../../../components/Common/Button';
import { CopyText } from './CopyText';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import {
  ConfirmContainer,
  ConfirmTitle,
  ConfirmDescription,
  ReferenceSection,
  ReferenceTitle,
  ReferenceDescription,
  ReviewSection,
  ReviewTitle,
  ReviewItem,
  ReviewLabel,
  ReviewValue,
  WarningBox,
  WarningText,
  ButtonGroup,
} from './Confirm.styles';

export const Confirm: React.FC = () => {
  const { formData, questions, reportId, nextStep, previousStep } = useFormContext();

  const generateReferenceCode = (): string => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const part1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const part2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return `${part1}-${part2}`;
  };

  const referenceCode = reportId || generateReferenceCode();

  const formatValue = (value: any): string => {
    if (value === null || value === undefined || value === '') {
      return 'Not provided';
    }

    if (Array.isArray(value)) {
      return value.length > 0 ? value.join(', ') : 'Not provided';
    }

    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }

    return String(value);
  };

  return (
    <ConfirmContainer>
      <ConfirmTitle>Review Your Report</ConfirmTitle>
      <ConfirmDescription>
        Please review the information you've provided before submitting. 
        Save your reference code to track or update your report later.
      </ConfirmDescription>

      <ReferenceSection>
        <ReferenceTitle>Your Reference Code</ReferenceTitle>
        <ReferenceDescription>
          Save this code to check the status of your report or make updates. 
          You will not be able to retrieve this code later, so please save it now.
        </ReferenceDescription>
        <CopyText text={referenceCode} />
      </ReferenceSection>

      <WarningBox>
        <AlertCircle size={20} />
        <WarningText>
          Please save your reference code before continuing. This is the only way to access your report in the future.
        </WarningText>
      </WarningBox>

      <ReviewSection>
        <ReviewTitle>Report Details</ReviewTitle>
        {questions.map((question) => {
          const value = formData[question.id];
          return (
            <ReviewItem key={question.id}>
              <ReviewLabel>{question.question}</ReviewLabel>
              <ReviewValue>{formatValue(value)}</ReviewValue>
            </ReviewItem>
          );
        })}
      </ReviewSection>

      <ButtonGroup>
        <Button
          variant="outline"
          leftIcon={<ArrowLeft size={20} />}
          onClick={previousStep}
        >
          Back to Edit
        </Button>
        <Button
          rightIcon={<ArrowRight size={20} />}
          onClick={nextStep}
        >
          Submit Report
        </Button>
      </ButtonGroup>
    </ConfirmContainer>
  );
};

export default Confirm;