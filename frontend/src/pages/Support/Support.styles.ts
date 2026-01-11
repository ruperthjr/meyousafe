import styled from 'styled-components';

export const SupportContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroSection = styled.section`
  padding: ${({ theme }) => (theme.spacing as any)['4xl']} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}10, 
    ${({ theme }) => (theme.colors as any).secondary}05
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
  font-family: ${({ theme }) => (theme.typography as any).fontFamily.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)['3xl']};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).xl};
  color: ${({ theme }) => theme.colors.text.tertiary};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any).lg};
  }
`;

export const EmergencyBanner = styled.div`
  max-width: 1200px;
  margin: ${({ theme }) => (theme.spacing as any)['2xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => (theme.colors as any).error}10;
  border: 2px solid ${({ theme }) => (theme.colors as any).error}30;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  svg {
    color: ${({ theme }) => (theme.colors as any).error};
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.xl};
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const EmergencyTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const EmergencyContent = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const EmergencyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const EmergencyCard = styled.a`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => (theme.colors as any).error};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-align: center;

  &:hover {
    background: ${({ theme }) => (theme.colors as any).error};
    transform: scale(1.05);
  }
`;

export const EmergencyCardTitle = styled.div`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color ${({ theme }) => theme.transitions.normal};

  ${EmergencyCard}:hover & {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const EmergencyCardNumber = styled.div`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => (theme.colors as any).error};
  transition: color ${({ theme }) => theme.transitions.normal};

  ${EmergencyCard}:hover & {
    color: ${({ theme }) => (theme.colors as any).text.inverse};
  }
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme.spacing as any)['3xl']} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => (theme.spacing as any)['2xl']} ${({ theme }) => theme.spacing.lg};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => (theme.typography as any).fontFamily.secondary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any).xl};
  }
`;

export const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight?.relaxed || '1.6'};
`;

export const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const ResourceCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.lg};
    border-color: ${({ theme }) => theme.colors.primary}30;
  }
`;

export const ResourceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => (theme.colors as any).secondary}
  );
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ResourceTitle = styled.h3`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ResourceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => (theme.typography as any).lineHeight?.relaxed || '1.6'};
`;

export const ResourceContact = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => (theme.typography.fontSize as any).sm};
  color: ${({ theme }) => theme.colors.text.tertiary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: ${({ theme }) => (theme.typography.fontSize as any).sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-top: ${({ theme }) => theme.spacing.sm};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => (theme.colors as any).primaryDark};
    text-decoration: underline;
  }
`;

export const LegalSection = styled(Section)`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LegalTitle = styled(SectionTitle)`
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const LegalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const LegalCard = styled.a`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  p {
    font-size: ${({ theme }) => (theme.typography.fontSize as any).sm};
    color: ${({ theme }) => theme.colors.text.tertiary};
    line-height: ${({ theme }) => (theme.typography as any).lineHeight?.relaxed || '1.6'};
    margin: 0;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LegalCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;