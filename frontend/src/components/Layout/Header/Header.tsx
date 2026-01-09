import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  HeaderBubbles,
} from './Header.styles';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/report', label: 'Report' },
    { path: '/about', label: 'About' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/support', label: 'Support' },
  ];

  return (
    <HeaderContainer className={className} $isScrolled={isScrolled}>
      <HeaderBubbles />
      <HeaderContent>
        <Logo to="/">
          <LogoIcon>
            <Shield size={28} strokeWidth={2.5} />
          </LogoIcon>
          <LogoText>MeYouSafe</LogoText>
        </Logo>

        <Nav>
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                $isActive={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            $isOpen={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </Nav>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.path}
            to={item.path}
            $isActive={location.pathname === item.path}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;