import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  FooterSection,
  FooterLogo,
  LogoIcon,
  LogoText,
  FooterDescription,
  FooterTitle,
  FooterLinks,
  FooterLink,
  ContactItem,
  ContactIcon,
  ContactText,
  FooterBottom,
  Copyright,
  SocialLinks,
  SocialLink,
  FooterBubbles,
  MadeWithLove,
} from './Footer.styles';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer className={className}>
      <FooterBubbles>
        <img src="/assets/images/footer-bubbles.svg" alt="" />
      </FooterBubbles>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterLogo to="/">
              <LogoIcon>
                <img src="/assets/images/logo.svg" alt="MeYouSafe Logo" />
              </LogoIcon>
              <LogoText>MeYouSafe</LogoText>
            </FooterLogo>
            <FooterDescription>
              Empowering survivors to share their stories safely and anonymously.
              Together, we create a safer community.
            </FooterDescription>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/report">Report Incident</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/faqs">FAQs</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Resources</FooterTitle>
            <FooterLinks>
              <FooterLink to="/support">Support</FooterLink>
              <FooterLink to="/refresh">Refresh Response</FooterLink>
              <FooterLink to="/docs/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </FooterLink>
              <FooterLink to="/docs/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterLinks>
              <ContactItem>
                <ContactIcon>
                  <Mail size={18} />
                </ContactIcon>
                <ContactText>support@meyousafe.com</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <Phone size={18} />
                </ContactIcon>
                <ContactText>+254 (700) 123-456</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <MapPin size={18} />
                </ContactIcon>
                <ContactText>Nairobi, Kenya</ContactText>
              </ContactItem>
            </FooterLinks>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} MeYouSafe. All rights reserved.
            <MadeWithLove>
              Made with <Heart size={14} fill="currentColor" /> for survivors
            </MadeWithLove>
          </Copyright>
          <SocialLinks>
            <SocialLink
              href="https://facebook.com/meyousafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/assets/icons/facebook.svg" alt="Facebook" />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/meyousafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
            >
              <img src="/assets/icons/x-social.svg" alt="X (Twitter)" />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/meyousafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/assets/icons/instagram.svg" alt="Instagram" />
            </SocialLink>
          </SocialLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;