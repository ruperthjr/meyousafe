import React from 'react';
import { Phone, Heart, Scale, AlertCircle, ExternalLink } from 'lucide-react';
import { SUPPORT_RESOURCES } from '../../constants/config';
import { EXTERNAL_LINKS } from '../../constants/routes';
import {
  SupportContainer,
  HeroSection,
  HeroTitle,
  HeroDescription,
  EmergencyBanner,
  EmergencyTitle,
  EmergencyContent,
  EmergencyGrid,
  EmergencyCard,
  EmergencyCardTitle,
  EmergencyCardNumber,
  Section,
  SectionTitle,
  SectionDescription,
  ResourceGrid,
  ResourceCard,
  ResourceIcon,
  ResourceTitle,
  ResourceDescription,
  ResourceContact,
  ResourceLink,
  LegalSection,
  LegalTitle,
  LegalGrid,
  LegalCard,
  LegalCardTitle,
} from './Support.styles';

export const Support: React.FC = () => {
  return (
    <SupportContainer>
      <HeroSection>
        <Heart size={64} strokeWidth={2} style={{ color: '#ec4899', marginBottom: '1.5rem' }} />
        <HeroTitle>Support Resources</HeroTitle>
        <HeroDescription>
          You are not alone. Help and support are available 24/7
        </HeroDescription>
      </HeroSection>

      <EmergencyBanner>
        <AlertCircle size={32} />
        <div>
          <EmergencyTitle>In Crisis? Get Help Now</EmergencyTitle>
          <EmergencyContent>
            If you are in immediate danger, please call emergency services
          </EmergencyContent>
          <EmergencyGrid>
            {SUPPORT_RESOURCES.CRISIS_HOTLINES.map((hotline, index) => (
              <EmergencyCard key={index} href={`tel:${hotline.number}`}>
                <EmergencyCardTitle>{hotline.name}</EmergencyCardTitle>
                <EmergencyCardNumber>{hotline.number}</EmergencyCardNumber>
              </EmergencyCard>
            ))}
          </EmergencyGrid>
        </div>
      </EmergencyBanner>

      <Section>
        <SectionTitle>
          <Heart size={28} style={{ marginRight: '0.5rem' }} />
          Counseling & Emotional Support
        </SectionTitle>
        <SectionDescription>
          Professional counseling services to help you process your experience and begin healing
        </SectionDescription>
        <ResourceGrid>
          {SUPPORT_RESOURCES.COUNSELING_SERVICES.map((service, index) => (
            <ResourceCard key={index}>
              <ResourceIcon>
                <Heart size={24} />
              </ResourceIcon>
              <ResourceTitle>{service.name}</ResourceTitle>
              <ResourceDescription>
                Professional counseling and emotional support services for survivors
              </ResourceDescription>
              <ResourceContact>
                <Phone size={16} />
                <a href={`tel:${service.contact}`}>{service.contact}</a>
              </ResourceContact>
              <ResourceLink
                href={service.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website <ExternalLink size={16} />
              </ResourceLink>
            </ResourceCard>
          ))}
        </ResourceGrid>
      </Section>

      <Section>
        <SectionTitle>
          <Scale size={28} style={{ marginRight: '0.5rem' }} />
          Legal Aid & Advocacy
        </SectionTitle>
        <SectionDescription>
          Free legal assistance and guidance for survivors of sexual harassment
        </SectionDescription>
        <ResourceGrid>
          {SUPPORT_RESOURCES.LEGAL_AID.map((aid, index) => (
            <ResourceCard key={index}>
              <ResourceIcon>
                <Scale size={24} />
              </ResourceIcon>
              <ResourceTitle>{aid.name}</ResourceTitle>
              <ResourceDescription>
                Legal representation, advice, and advocacy for survivors
              </ResourceDescription>
              <ResourceContact>
                <Phone size={16} />
                <a href={`tel:${aid.contact}`}>{aid.contact}</a>
              </ResourceContact>
              <ResourceLink
                href={aid.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website <ExternalLink size={16} />
              </ResourceLink>
            </ResourceCard>
          ))}
        </ResourceGrid>
      </Section>

      <LegalSection>
        <LegalTitle>Know Your Rights</LegalTitle>
        <SectionDescription style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Important legal resources and information about sexual harassment laws in Kenya
        </SectionDescription>
        <LegalGrid>
          <LegalCard
            href={EXTERNAL_LINKS.LEGAL_RESOURCES.SEXUAL_OFFENCES_ACT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Scale size={24} style={{ marginBottom: '1rem', color: '#6366f1' }} />
            <LegalCardTitle>Sexual Offences Act</LegalCardTitle>
            <p>Kenya's comprehensive law addressing sexual offences including harassment</p>
          </LegalCard>

          <LegalCard
            href={EXTERNAL_LINKS.LEGAL_RESOURCES.EMPLOYMENT_ACT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Scale size={24} style={{ marginBottom: '1rem', color: '#6366f1' }} />
            <LegalCardTitle>Employment Act</LegalCardTitle>
            <p>Protections against workplace harassment and discrimination</p>
          </LegalCard>

          <LegalCard
            href={EXTERNAL_LINKS.LEGAL_RESOURCES.CONSTITUTION}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Scale size={24} style={{ marginBottom: '1rem', color: '#6366f1' }} />
            <LegalCardTitle>Constitution of Kenya</LegalCardTitle>
            <p>Fundamental rights and freedoms protecting all citizens</p>
          </LegalCard>
        </LegalGrid>
      </LegalSection>
    </SupportContainer>
  );
};

export default Support;