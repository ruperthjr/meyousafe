import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(15px) translateX(-10px) scale(1.03);
  }
  66% {
    transform: translateY(-10px) translateX(10px) scale(0.97);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
  color: #ffffff;
  padding: 4rem 2rem 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }
`;

export const FooterBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.4;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(139, 92, 246, 0.3) 0%,
      rgba(99, 102, 241, 0.15) 50%,
      transparent 100%
    );
    animation: ${float} 12s ease-in-out infinite;
  }

  &::before {
    width: 250px;
    height: 250px;
    bottom: -100px;
    left: -50px;
    animation-delay: 0s;
  }

  &::after {
    width: 180px;
    height: 180px;
    bottom: -50px;
    right: 10%;
    animation-delay: 4s;
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
    
    & > :last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  ${FooterLogo}:hover & {
    box-shadow: 0 12px 32px rgba(139, 92, 246, 0.4);
    transform: rotate(-5deg) scale(1.05);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  }
`;

export const LogoText = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
`;

export const FooterDescription = styled.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  max-width: 320px;
  margin: 0;
`;

export const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  padding-bottom: 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
    border-radius: 2px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const FooterLink = styled(Link)`
font-size: 0.9375rem;
color: rgba(255, 255, 255, 0.7);
text-decoration: none;
transition: all 0.3s ease;
width: fit-content;
position: relative;
padding-left: 0;
&::before {
content: '';
position: absolute;
left: 0;
bottom: 0;
width: 0;
height: 2px;
background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
transition: width 0.3s ease;
}
&:hover {
color: #ffffff;
padding-left: 12px;
&::before {
  width: calc(100% - 12px);
}
}
`;
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
export const ContactIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 36px;
background: rgba(139, 92, 246, 0.2);
backdrop-filter: blur(8px);
border: 1px solid rgba(139, 92, 246, 0.3);
border-radius: 8px;
color: #a78bfa;
flex-shrink: 0;
transition: all 0.3s ease;
${ContactItem}:hover & {
background: rgba(139, 92, 246, 0.3);
border-color: rgba(139, 92, 246, 0.5);
transform: scale(1.1);
}
`;
export const ContactText = styled.span`
font-size: 0.9375rem;
color: rgba(255, 255, 255, 0.7);
transition: color 0.3s ease;
${ContactItem}:hover & {
color: #ffffff;
}
`;
export const FooterBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 2rem;
padding-top: 2rem;
@media (max-width: 768px) {
flex-direction: column;
text-align: center;
gap: 1.5rem;
}
`;
export const Copyright = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const MadeWithLove = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
  svg {
    color: #f87171;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
  }
  &:active {
    transform: translateY(-1px);
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;