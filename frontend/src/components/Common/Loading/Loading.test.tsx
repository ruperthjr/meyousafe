import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading', () => {
  it('renders with default spinner variant', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('renders with dots variant', () => {
    const { container } = render(<Loading variant="dots" />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('renders with pulse variant', () => {
    const { container } = render(<Loading variant="pulse" />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('displays loading text when provided', () => {
    render(<Loading text="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders in fullscreen mode', () => {
    const { container } = render(<Loading fullScreen />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with overlay', () => {
    const { container } = render(<Loading overlay />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies different sizes', () => {
    const { rerender, container } = render(<Loading size="small" />);
    expect(container.firstChild).toBeInTheDocument();

    rerender(<Loading size="medium" />);
    expect(container.firstChild).toBeInTheDocument();

    rerender(<Loading size="large" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom color', () => {
    const { container } = render(<Loading color="#ff0000" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Loading className="custom-loading" />);
    expect(container.querySelector('.custom-loading')).toBeInTheDocument();
  });
});