import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

const renderHeader = () => {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders the logo and navigation links', () => {
    renderHeader();

    expect(screen.getByText('MeYouSafe')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    renderHeader();

    const mobileMenuButton = screen.getByLabelText('Open menu');
    fireEvent.click(mobileMenuButton);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('closes mobile menu when a link is clicked', () => {
    renderHeader();

    const mobileMenuButton = screen.getByLabelText('Open menu');
    fireEvent.click(mobileMenuButton);

    const homeLink = screen.getAllByText('Home')[1];
    fireEvent.click(homeLink);

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('applies active styles to current route', () => {
    renderHeader();

    const homeLink = screen.getAllByText('Home')[0];
    expect(homeLink).toHaveStyle({ color: expect.any(String) });
  });
});