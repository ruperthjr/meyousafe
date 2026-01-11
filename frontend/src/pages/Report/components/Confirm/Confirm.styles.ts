import styled from 'styled-components';

export const ConfirmContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const ConfirmTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ConfirmDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight.relaxed};
`;

export const ReferenceSection = styled.div`
  background: ${({ theme }) => theme.colors.primary}10;
  border: 2px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const ReferenceTitle = styled.h3`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>).xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ReferenceDescription = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>).sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight.relaxed};
`;

export const WarningBox = styled.div`
  background: ${({ theme }) => (theme as any).colors.warning}15;
  border-left: 4px solid ${({ theme }) => (theme as any).colors.warning};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: start;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => (theme as any).colors.warning};
    margin-top: 2px;
  }
`;

export const WarningText = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>).sm};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight.relaxed};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const ReviewSection = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ReviewTitle = styled.h3`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>).lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const ReviewItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ReviewLabel = styled.div`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>).sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ReviewValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight.relaxed};
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;