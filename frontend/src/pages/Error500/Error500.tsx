import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/Common/Button';
import { ROUTES } from '../../constants/routes';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
`;

const ErrorContent = styled.div`
  max-width: 600px;
  text-align: center;
`;

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => (theme.typography as any).fontFamily.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h1`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl']};
  }
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['lg']};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight.relaxed};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const Error500: React.FC = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ErrorContainer>
      <ErrorContent>
        <IconWrapper>
          <AlertTriangle size={80} strokeWidth={1.5} />
        </IconWrapper>
        <ErrorCode>500</ErrorCode>
        <ErrorTitle>Server Error</ErrorTitle>
        <ErrorMessage>
          Something went wrong on our end. We're working to fix the issue. 
          Please try again in a few moments.
        </ErrorMessage>
        <ButtonGroup>
          <Button
            size="large"
            leftIcon={<RefreshCw size={20} />}
            onClick={handleRefresh}
          >
            Refresh Page
          </Button>
          <Button
            variant="outline"
            size="large"
            leftIcon={<Home size={20} />}
            onClick={() => navigate(ROUTES.HOME)}
          >
            Go Home
          </Button>
        </ButtonGroup>
      </ErrorContent>
    </ErrorContainer>
  );
};

export default Error500;