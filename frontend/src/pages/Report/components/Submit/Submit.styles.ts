import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SubmitContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  animation: ${fadeIn} 0.6s ease-out;
`;

export const StatusSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SuccessIcon = styled.div`
  color: ${({ theme }) => (theme.colors as any).success};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const ErrorIcon = styled.div`
  color: ${({ theme }) => (theme.colors as any).error};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;
`;

export const LoadingSpinner = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  border: 4px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const StatusTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl']};
  font-weight: ${({ theme }) => (theme.typography.fontWeight as any).bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StatusMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight?.relaxed ?? '1.5'};
  max-width: 600px;
  margin: 0 auto;
`;

export const ReferenceCard = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}15, 
    ${({ theme }) => theme.colors.primary}10
  );
  border: 2px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const ReferenceTitle = styled.h3`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ReferenceCode = styled.div`
  font-family: ${({ theme }) => ((theme.typography as any).fontFamily?.mono ?? 'monospace')};
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['3xl']};
  font-weight: ${({ theme }) => (theme.typography.fontWeight as any).bold};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 4px;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px dashed ${({ theme }) => theme.colors.primary};
`;

export const ResourcesSection = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const ResourcesTitle = styled.h3`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl']};
  font-weight: ${({ theme }) => (theme.typography.fontWeight as any).bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const ResourceCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.lg};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ResourceCardTitle = styled.h4`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ResourceCardDescription = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight?.relaxed ?? '1.5'};
`;

export const ResourceCardLink = styled.a`
  display: block;
  font-size: ${({ theme }) => (theme.typography.fontSize as any).sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => (theme.typography.fontWeight as any).medium};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;