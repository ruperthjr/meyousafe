import React, { useEffect } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { Form, Confirm, Submit } from './components';
import { REPORT_STEPS } from '../../constants/routes';
import { INCIDENT_CATEGORIES, INCIDENT_LOCATIONS, RELATIONSHIP_TO_PERPETRATOR, PREFERRED_ACTIONS } from '../../constants/config';
import { FormQuestion } from '../../contexts/FormContext';
import {
  ReportContainer,
  ProgressBar,
  ProgressBarFill,
  ProgressSteps,
  ProgressStep,
  ProgressStepNumber,
  ProgressStepLabel,
  ContentContainer,
} from './Report.styles';

const reportQuestions: FormQuestion[] = [
  {
    id: 'incidentCategory',
    question: 'What type of harassment occurred?',
    type: 'select',
    required: true,
    options: Object.values(INCIDENT_CATEGORIES),
    helperText: 'Select the category that best describes what happened',
  },
  {
    id: 'incidentDescription',
    question: 'Please describe what happened',
    type: 'textarea',
    required: true,
    placeholder: 'Provide as much detail as you feel comfortable sharing...',
    helperText: 'Include details such as what was said or done, how it made you feel, and any witnesses present',
  },
  {
    id: 'incidentDate',
    question: 'When did this incident occur?',
    type: 'date',
    required: true,
    helperText: 'Select the date when the incident happened',
  },
  {
    id: 'incidentTime',
    question: 'Approximately what time did this occur?',
    type: 'time',
    required: false,
    helperText: 'If you remember, select the approximate time',
  },
  {
    id: 'incidentLocation',
    question: 'Where did this incident take place?',
    type: 'select',
    required: true,
    options: Object.values(INCIDENT_LOCATIONS),
    helperText: 'Select the location type',
  },
  {
    id: 'locationDetails',
    question: 'Can you provide more details about the location?',
    type: 'text',
    required: false,
    placeholder: 'e.g., Third floor office, Conference Room B, etc.',
    helperText: 'Optional: Provide specific location details if you feel comfortable',
  },
  {
    id: 'relationshipToPerpetrator',
    question: 'What is your relationship to the person who did this?',
    type: 'select',
    required: true,
    options: Object.values(RELATIONSHIP_TO_PERPETRATOR),
    helperText: 'Select the relationship that applies',
  },
  {
    id: 'isOngoing',
    question: 'Is this harassment ongoing?',
    type: 'radio',
    required: true,
    options: ['Yes', 'No', 'Unsure'],
    helperText: 'Let us know if this continues to happen',
  },
  {
    id: 'hasWitnesses',
    question: 'Were there any witnesses?',
    type: 'radio',
    required: false,
    options: ['Yes', 'No', 'Unsure'],
  },
  {
    id: 'witnessDetails',
    question: 'If there were witnesses, can you provide any details?',
    type: 'textarea',
    required: false,
    placeholder: 'Names, descriptions, or any other relevant information...',
    helperText: 'Optional: Share witness information only if you feel comfortable',
  },
  {
    id: 'previouslyReported',
    question: 'Have you reported this incident before?',
    type: 'radio',
    required: false,
    options: ['Yes', 'No'],
  },
  {
    id: 'previousReportDetails',
    question: 'If yes, where and when did you report it?',
    type: 'textarea',
    required: false,
    placeholder: 'Provide details about your previous report...',
  },
  {
    id: 'preferredAction',
    question: 'What would you like to happen as a result of this report?',
    type: 'checkbox',
    required: false,
    options: Object.values(PREFERRED_ACTIONS),
    helperText: 'Select all that apply',
  },
  {
    id: 'additionalInformation',
    question: 'Is there anything else you would like us to know?',
    type: 'textarea',
    required: false,
    placeholder: 'Any additional context or information...',
    helperText: 'Optional: Share any other relevant details',
  },
];

export const Report: React.FC = () => {
  const { currentStep, totalSteps, setQuestions, loadProgress } = useFormContext();

  useEffect(() => {
    setQuestions(reportQuestions);
    loadProgress();
  }, [setQuestions, loadProgress]);

  const progressPercentage = (currentStep / totalSteps) * 100;

  const getStepLabel = (step: number): string => {
    switch (step) {
      case REPORT_STEPS.FORM:
        return 'Provide Information';
      case REPORT_STEPS.CONFIRM:
        return 'Review Details';
      case REPORT_STEPS.SUBMIT:
        return 'Submit Report';
      default:
        return '';
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case REPORT_STEPS.FORM:
        return <Form />;
      case REPORT_STEPS.CONFIRM:
        return <Confirm />;
      case REPORT_STEPS.SUBMIT:
        return <Submit />;
      default:
        return <Form />;
    }
  };

  return (
    <ReportContainer>
      <ProgressBar>
        <ProgressBarFill $progress={progressPercentage} />
      </ProgressBar>

      <ProgressSteps>
        {[REPORT_STEPS.FORM, REPORT_STEPS.CONFIRM, REPORT_STEPS.SUBMIT].map((step) => (
          <ProgressStep key={step} $active={currentStep === step} $completed={currentStep > step}>
            <ProgressStepNumber $active={currentStep === step} $completed={currentStep > step}>
              {step}
            </ProgressStepNumber>
            <ProgressStepLabel>{getStepLabel(step)}</ProgressStepLabel>
          </ProgressStep>
        ))}
      </ProgressSteps>

      <ContentContainer>{renderStep()}</ContentContainer>
    </ReportContainer>
  );
};

export default Report;