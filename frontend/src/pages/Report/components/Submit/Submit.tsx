import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../../../contexts/FormContext';
import { Button } from '../../../../components/Common/Button';
import { responsesService } from '../../../../services';
import { CheckCircle, Home, Phone, Heart, AlertCircle } from 'lucide-react';
import { ROUTES } from '../../../../constants/routes';
import { SUPPORT_RESOURCES } from '../../../../constants/config';
import {
  SubmitContainer,
  StatusSection,
  SuccessIcon,
  ErrorIcon,
  StatusTitle,
  StatusMessage,
  ReferenceCard,
  ReferenceTitle,
  ReferenceCode,
  ResourcesSection,
  ResourcesTitle,
  ResourcesGrid,
  ResourceCard,
  ResourceCardTitle,
  ResourceCardDescription,
  ResourceCardLink,
  ButtonGroup,
  LoadingSpinner,
} from './Submit.styles';

export const Submit: React.FC = () => {
  const navigate = useNavigate();
  const { formData, reportId, resetForm, setReportId } = useFormContext();
  const [submitting, setSubmitting] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(reportId ?? null);

  useEffect(() => {
    const submitReport = async () => {
      try {
        setSubmitting(true);
        setError(null);

        const response = await responsesService.create({
          formId: 'default',
          data: formData,
        });

        const ref = response.referenceCode ?? response.id ?? null;
        setSubmittedReportId(ref);
        setReportId(ref);

        setTimeout(() => {
          setSubmitting(false);
        }, 1500);
      } catch (err) {
        console.error('Failed to submit report:', err);
        setError('Failed to submit your report. Please try again.');
        setSubmitting(false);
      }
    };

    submitReport();
  }, []);

  const handleGoHome = () => {
    resetForm();
    navigate(ROUTES.HOME);
  };

  if (submitting) {
    return (
      <SubmitContainer>
        <StatusSection>
          <LoadingSpinner />
          <StatusTitle>Submitting Your Report...</StatusTitle>
          <StatusMessage>Please wait while we securely process your submission.</StatusMessage>
        </StatusSection>
      </SubmitContainer>
    );
  }

  if (error) {
    return (
      <SubmitContainer>
        <StatusSection>
          <ErrorIcon>
            <AlertCircle size={64} />
          </ErrorIcon>
          <StatusTitle>Submission Failed</StatusTitle>
          <StatusMessage>{error}</StatusMessage>
          <ButtonGroup>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
            <Button variant="outline" onClick={handleGoHome}>
              Go Home
            </Button>
          </ButtonGroup>
        </StatusSection>
      </SubmitContainer>
    );
  }

  return (
    <SubmitContainer>
      <StatusSection>
        <SuccessIcon>
          <CheckCircle size={64} />
        </SuccessIcon>
        <StatusTitle>Report Submitted Successfully</StatusTitle>
        <StatusMessage>
          Thank you for your courage in coming forward. Your report has been received and will be handled with care and confidentiality.
        </StatusMessage>
      </StatusSection>

      {submittedReportId && (
        <ReferenceCard>
          <ReferenceTitle>Your Reference Code</ReferenceTitle>
          <ReferenceCode>{submittedReportId}</ReferenceCode>
          <StatusMessage style={{ marginTop: '1rem' }}>
            Keep this code safe. You can use it to check the status of your report or provide additional information.
          </StatusMessage>
        </ReferenceCard>
      )}

      <ResourcesSection>
        <Heart size={32} style={{ color: '#ec4899', marginBottom: '1rem' }} />
        <ResourcesTitle>Support Resources Available</ResourcesTitle>
        <ResourcesGrid>
          <ResourceCard>
            <Phone size={24} />
            <ResourceCardTitle>Crisis Hotlines</ResourceCardTitle>
            <ResourceCardDescription>
              24/7 support is available. Reach out anytime you need help.
            </ResourceCardDescription>
            {SUPPORT_RESOURCES.CRISIS_HOTLINES.map((hotline, idx) => (
              <ResourceCardLink key={idx} href={`tel:${hotline.number}`}>
                {hotline.name}: {hotline.number}
              </ResourceCardLink>
            ))}
          </ResourceCard>

          <ResourceCard>
            <Heart size={24} />
            <ResourceCardTitle>Counseling Services</ResourceCardTitle>
            <ResourceCardDescription>
              Professional counseling and emotional support services.
            </ResourceCardDescription>
            {SUPPORT_RESOURCES.COUNSELING_SERVICES.slice(0, 2).map((service, idx) => (
              <ResourceCardLink key={idx} href={service.website} target="_blank" rel="noopener noreferrer">
                {service.name}
              </ResourceCardLink>
            ))}
          </ResourceCard>

          <ResourceCard>
            <CheckCircle size={24} />
            <ResourceCardTitle>Legal Aid</ResourceCardTitle>
            <ResourceCardDescription>
              Free legal assistance and guidance for survivors.
            </ResourceCardDescription>
            {SUPPORT_RESOURCES.LEGAL_AID.slice(0, 2).map((aid, idx) => (
              <ResourceCardLink key={idx} href={aid.website} target="_blank" rel="noopener noreferrer">
                {aid.name}
              </ResourceCardLink>
            ))}
          </ResourceCard>
        </ResourcesGrid>
      </ResourcesSection>

      <ButtonGroup>
        <Button size="large" leftIcon={<Home size={20} />} onClick={handleGoHome}>
          Return Home
        </Button>
        <Button
          size="large"
          variant="outline"
          onClick={() => navigate(ROUTES.SUPPORT)}
        >
          View More Resources
        </Button>
      </ButtonGroup>
    </SubmitContainer>
  );
};

export default Submit;