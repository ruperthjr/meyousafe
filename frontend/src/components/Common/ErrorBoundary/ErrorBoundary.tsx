import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.05) 100%);
  border-radius: 16px;
  margin: 2rem;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);

  svg {
    color: white;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.0625rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
  max-width: 600px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: inherit;

  ${({ $variant = 'primary' }) =>
    $variant === 'primary'
      ? `
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);

    &:hover {
      background: linear-gradient(135deg, #5558e3 0%, #7c3aed 100%);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
      transform: translateY(-2px);
    }
  `
      : `
    background: white;
    color: #6366f1;
    border: 2px solid #e5e7eb;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    &:hover {
      background: #f9fafb;
      border-color: #6366f1;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

const ErrorDetails = styled.details`
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #fee2e2;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  summary {
    cursor: pointer;
    font-weight: 600;
    color: #dc2626;
    font-size: 0.9375rem;
    user-select: none;
    margin-bottom: 1rem;

    &:hover {
      color: #b91c1c;
    }
  }

  pre {
    background: #fef2f2;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: #991b1b;
    margin: 0;
  }
`;

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
        if (typeof (globalThis as any).process !== 'undefined' && (globalThis as any).process.env?.NODE_ENV === 'development') {
          console.error('ErrorBoundary caught an error:', error, errorInfo);
        }

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = (): void => {
    window.location.href = '/';
  };

  render(): ReactNode {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, showDetails = false } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <ErrorContainer>
          <IconWrapper>
            <AlertTriangle size={40} />
          </IconWrapper>

          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Your report data is safe. 
            Please try refreshing the page or return to the home page.
          </ErrorMessage>

          <ButtonGroup>
            <ActionButton $variant="primary" onClick={this.handleReset}>
              <RefreshCw size={18} />
              Try Again
            </ActionButton>
            <ActionButton $variant="secondary" onClick={this.handleGoHome}>
              <Home size={18} />
              Go to Home
            </ActionButton>
          </ButtonGroup>

          {showDetails && error && (
            <ErrorDetails>
              <summary>Technical Details (for developers)</summary>
              <pre>
                <strong>Error:</strong> {error.toString()}
                {'\n\n'}
                <strong>Stack Trace:</strong>
                {'\n'}
                {errorInfo?.componentStack}
              </pre>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return children;
  }
}

export default ErrorBoundary;