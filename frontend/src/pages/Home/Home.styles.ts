import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const FloatingShape = styled.div<{ $delay: number; $duration: number }>`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}15, 
    ${({ theme }) => theme.colors.primary}10
  );
  filter: blur(40px);
  animation: ${float} ${({ $duration }) => $duration}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  &:nth-child(1) {
    top: 10%;
    left: 10%;
  }

  &:nth-child(2) {
    top: 50%;
    right: 15%;
  }

  &:nth-child(3) {
    bottom: 15%;
    left: 20%;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['5xl'] ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  /* font-family: 'YourFallbackFontFamily', sans-serif; */

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)['3xl'] ?? theme.typography.fontSize.base};
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl'] ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any).xl ?? theme.typography.fontSize.base};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => (theme.typography.fontSize as any).lg ?? theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

export const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['3xl'] ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  /* font-family: 'YourFallbackFontFamily', sans-serif; */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['2xl'] ?? theme.typography.fontSize.base};
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.lg};
  }
`;

export const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.primary}
  );
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)?.xl ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  line-height: 1.6;
`;

export const StatsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => (theme.spacing as any)['2xl']} ${({ theme }) => theme.spacing.lg};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
`;

export const StatCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.surface}
  );
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['4xl'] ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)?.lg ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  opacity: 0.9;
`;

export const EmergencySection = styled.section`
  padding: ${({ theme }) => (theme.spacing as any)['3xl'] ?? theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.primary}10;
  border-top: 2px solid ${({ theme }) => theme.colors.primary}30;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => (theme.spacing as any)['2xl'] ?? theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const EmergencyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const EmergencyTitle = styled.h2`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl'] ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => (theme.typography.fontSize as any)?.xl ?? theme.typography.fontSize.base};
  }
`;

export const EmergencyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const EmergencyCardTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color ${({ theme }) => theme.transitions.normal};
`;

export const EmergencyCardNumber = styled.div`
  font-size: ${({ theme }) => (theme.typography.fontSize as any)['2xl'] ?? theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  transition: color ${({ theme }) => theme.transitions.normal};
`;

export const EmergencyCard = styled.a`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);

    ${EmergencyCardTitle}, ${EmergencyCardNumber} {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;