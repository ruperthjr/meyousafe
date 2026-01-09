import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';

const renderFooter = () => {
  return render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe('Footer', () => {
  it('renders the logo and description', () => {
    renderFooter();

    expect(screen.getByText('MeYouSafe')).toBeInTheDocument();
    expect(
      screen.getByText(/Empowering survivors to share their stories/i)
    ).toBeInTheDocument();
  });

  it('renders all footer sections', () => {
    renderFooter();

    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderFooter();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Report Incident')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderFooter();

    expect(screen.getByText('support@meyousafe.com')).toBeInTheDocument();
    expect(screen.getByText('+254 (700) 123-456')).toBeInTheDocument();
    expect(screen.getByText('Nairobi, Kenya')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    renderFooter();

    const socialLinks = screen.getAllByRole('link', { name: /Facebook|Twitter|Instagram/i });
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('displays current year in copyright', () => {
    renderFooter();

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });
});