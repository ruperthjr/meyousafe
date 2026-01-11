import styled from 'styled-components';

export const FAQsContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroSection = styled.section`
  padding: ${({ theme }) => (theme.spacing as any)['4xl']} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}10, 
    ${({ theme }) => ((theme.colors as any).secondary ?? theme.colors.primary)}05
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => (theme.spacing as any)['3xl']} ${({ theme }) => theme.spacing.lg};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => ((theme.typography as any).fontFamily?.secondary ?? 'inherit')};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)['3xl']};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['lg']};
  color: ${({ theme }) => ((theme.colors.text as any).secondary ?? theme.colors.text.tertiary ?? theme.colors.text.primary)};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)['base']};
  }
`;

export const CategorySection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme.spacing as any)['2xl']} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => ((theme.typography as any).fontFamily?.secondary ?? 'inherit')};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)['xl']};
  }
`;

export const FAQsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.md};
  }
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme, $isOpen }) => 
    $isOpen ? theme.colors.primary + '10' : 'transparent'};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  text-align: left;
  transition: background ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}10;
  }
`;

export const QuestionText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: ${({ theme }) => ((theme.typography as any).lineHeight?.normal ?? '1.5')};
`;

export const ToggleIcon = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FAQAnswer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => ((theme.colors.text as any).secondary ?? theme.colors.text.tertiary ?? theme.colors.text.primary)};
  line-height: ${({ theme }) => ((theme.typography as any).lineHeight?.relaxed ?? '1.75')};
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;