import React from 'react';
import { Shield, Heart, Lock, Users, Target, Eye } from 'lucide-react';
import { APP_CONFIG } from '../../constants/config';
import {
  AboutContainer,
  HeroSection,
  HeroTitle,
  HeroDescription,
  Section,
  SectionTitle,
  SectionContent,
  ValueGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  MissionBox,
  MissionIcon,
  MissionText,
  StatementBox,
} from './About.styles';

export const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety and wellbeing of all survivors. Our platform is designed with security and confidentiality at its core.',
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      description: 'Your information is encrypted and protected. We never share personal details without explicit consent.',
    },
    {
      icon: Heart,
      title: 'Survivor-Centered',
      description: 'Every feature is designed with survivors in mind, ensuring a compassionate and supportive experience.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'We connect survivors with professional resources, counseling services, and legal aid organizations.',
    },
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <Shield size={64} strokeWidth={2} style={{ color: '#6366f1', marginBottom: '1.5rem' }} />
        <HeroTitle>About {APP_CONFIG.NAME}</HeroTitle>
        <HeroDescription>{APP_CONFIG.TAGLINE}</HeroDescription>
      </HeroSection>

      <Section>
        <MissionBox>
          <MissionIcon>
            <Target size={32} />
          </MissionIcon>
          <div>
            <SectionTitle>Our Mission</SectionTitle>
            <MissionText>
              MeYouSafe exists to provide a safe, secure, and confidential platform for individuals in Kenya to report incidents of sexual harassment. We believe that every person deserves to work, study, and live in environments free from harassment and discrimination. By empowering survivors to document their experiences and connect with support resources, we aim to break the silence surrounding sexual harassment and contribute to creating safer communities for all.
            </MissionText>
          </div>
        </MissionBox>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <ValueGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <ValueIcon>
                <value.icon size={28} strokeWidth={2} />
              </ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValueGrid>
      </Section>

      <Section>
        <StatementBox>
          <Eye size={32} style={{ color: '#6366f1', marginBottom: '1rem' }} />
          <SectionTitle>Our Vision</SectionTitle>
          <SectionContent>
            We envision a Kenya where sexual harassment is not tolerated, where survivors are believed and supported, and where organizations and institutions actively work to prevent harassment and protect their members. Through technology, education, and advocacy, we strive to create lasting change in how sexual harassment is addressed and prevented in our communities.
          </SectionContent>
        </StatementBox>
      </Section>

      <Section>
        <SectionTitle>Why MeYouSafe?</SectionTitle>
        <SectionContent>
          Many survivors of sexual harassment face barriers when trying to report incidents through traditional channels. Fear of retaliation, lack of confidentiality, complex reporting processes, and limited access to support resources can prevent individuals from coming forward. MeYouSafe addresses these challenges by providing an anonymous reporting option, a simple and guided reporting process, encrypted data protection, immediate access to crisis hotlines and support services, and connection to legal aid and counseling resources. We believe that by making it easier and safer to report sexual harassment, we can help more survivors get the support they need while also providing valuable data to help prevent future incidents.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Our Commitment</SectionTitle>
        <SectionContent>
          We are committed to maintaining the highest standards of data security and user privacy. All reports are encrypted and stored securely. We never share personal information without explicit consent. Our platform is continuously updated to meet the latest security standards. We work with trusted partner organizations to ensure survivors have access to professional support. We advocate for policies and practices that prevent sexual harassment and protect survivors.
        </SectionContent>
      </Section>

      <Section>
        <StatementBox>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionContent>
            For general inquiries: <a href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`}>{APP_CONFIG.CONTACT_EMAIL}</a>
            <br />
            For privacy concerns: <a href={`mailto:${APP_CONFIG.PRIVACY_EMAIL}`}>{APP_CONFIG.PRIVACY_EMAIL}</a>
          </SectionContent>
        </StatementBox>
      </Section>
    </AboutContainer>
  );
};

export default About;