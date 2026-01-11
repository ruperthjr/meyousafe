import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, FileText, Lock, Users, ArrowRight, Phone } from 'lucide-react';
import { Button } from '../../components/Common/Button';
import { ROUTES } from '../../constants/routes';
import { APP_CONFIG, SUPPORT_RESOURCES } from '../../constants/config';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtons,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  StatsSection,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  EmergencySection,
  EmergencyContent,
  EmergencyTitle,
  EmergencyGrid,
  EmergencyCard,
  EmergencyCardTitle,
  EmergencyCardNumber,
  BackgroundShapes,
  FloatingShape,
} from './Home.styles';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Lock,
      title: 'Secure & Confidential',
      description:
        'Your privacy is our priority. All reports are encrypted and stored securely with options for anonymous reporting.',
    },
    {
      icon: FileText,
      title: 'Easy Reporting',
      description:
        'Simple step-by-step form to document incidents. Save progress and complete at your own pace.',
    },
    {
      icon: Shield,
      title: 'Safe Platform',
      description:
        'Built with your safety in mind. No personal information required unless you choose to provide it.',
    },
    {
      icon: Users,
      title: 'Support Network',
      description:
        'Access to counseling services, legal aid, and support organizations dedicated to helping survivors.',
    },
  ];

  const stats = [
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Confidential' },
    { number: 'Free', label: 'No Cost Ever' },
  ];

  return (
    <HomeContainer>
      <BackgroundShapes>
        <FloatingShape $delay={0} $duration={20} />
        <FloatingShape $delay={5} $duration={25} />
        <FloatingShape $delay={10} $duration={30} />
      </BackgroundShapes>

      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <Shield size={48} strokeWidth={2} />
            {APP_CONFIG.NAME}
          </HeroTitle>
          <HeroSubtitle>{APP_CONFIG.TAGLINE}</HeroSubtitle>
          <HeroDescription>{APP_CONFIG.DESCRIPTION}</HeroDescription>
          <HeroButtons>
            <Button
              size="large"
              rightIcon={<ArrowRight size={20} />}
              onClick={() => navigate(ROUTES.REPORT)}
            >
              Report an Incident
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => navigate(ROUTES.SUPPORT)}
            >
              Get Support
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Choose MeYouSafe?</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>
                <feature.icon size={32} strokeWidth={2} />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <StatsSection>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      <EmergencySection>
        <EmergencyContent>
          <Phone size={40} strokeWidth={2} />
          <EmergencyTitle>Need Immediate Help?</EmergencyTitle>
          <EmergencyGrid>
            {SUPPORT_RESOURCES.CRISIS_HOTLINES.map((hotline, index) => (
              <EmergencyCard key={index} href={`tel:${hotline.number}`}>
                <EmergencyCardTitle>{hotline.name}</EmergencyCardTitle>
                <EmergencyCardNumber>{hotline.number}</EmergencyCardNumber>
              </EmergencyCard>
            ))}
          </EmergencyGrid>
        </EmergencyContent>
      </EmergencySection>
    </HomeContainer>
  );
};

export default Home;