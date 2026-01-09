import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-20px) translateX(10px) scale(1.05);
  }
  66% {
    transform: translateY(10px) translateX(-10px) scale(0.95);
  }
`;

// removed unused shimmer animation to avoid unused variable warning

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $isScrolled }) =>
    $isScrolled
      ? 'rgba(255, 255, 255, 0.95)'
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.95) 0%, rgba(139, 92, 246, 0.95) 100%)'};
  backdrop-filter: blur(12px);
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled
      ? '0 4px 20px rgba(0, 0, 0, 0.08)'
      : '0 4px 30px rgba(99, 102, 241, 0.3)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media (max-width: 768px) {
    background: ${({ $isScrolled }) =>
      $isScrolled
        ? 'rgba(255, 255, 255, 0.98)'
        : 'linear-gradient(135deg, rgba(99, 102, 241, 0.98) 0%, rgba(139, 92, 246, 0.98) 100%)'};
  }
`;

export const HeaderBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    animation: ${float} 8s ease-in-out infinite;
  }

  &::before {
    width: 150px;
    height: 150px;
    top: -50px;
    right: 10%;
    animation-delay: 0s;
  }

  &::after {
    width: 100px;
    height: 100px;
    top: -30px;
    right: 30%;
    animation-delay: 2s;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  border-radius: 12px;
  color: #6366f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  ${Logo}:hover & {
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    transform: rotate(-5deg) scale(1.05);
  }
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #ffffff 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${Logo}:hover &::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  padding: 0.625rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)')};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  backdrop-filter: ${({ $isActive }) => ($isActive ? 'blur(8px)' : 'none')};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${({ $isOpen }) => ($isOpen ? '1rem 2rem 1.5rem' : '0 2rem')};
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.9)')};
  text-decoration: none;
  border-radius: 10px;
  background: ${({ $isActive }) =>
    $isActive
      ? 'rgba(255, 255, 255, 0.25)'
      : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(8px);
  border: 1px solid ${({ $isActive }) =>
    $isActive ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateX(4px);
  }

  &:active {
    transform: translateX(2px);
  }
`;