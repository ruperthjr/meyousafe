import styled, { css, keyframes } from 'styled-components';
import { ButtonVariant, ButtonSize } from './Button';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rippleAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const variantStyles = {
  primary: css`
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: #ffffff;
    border: none;
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmer} 3s infinite;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #5558e3 0%, #7c3aed 100%);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
      transform: translateY(-2px);

      &::before {
        opacity: 1;
      }
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
    }
  `,

  secondary: css`
    background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
    color: #ffffff;
    border: none;
    box-shadow: 0 4px 14px rgba(236, 72, 153, 0.4);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #db2777 0%, #e11d48 100%);
      box-shadow: 0 6px 20px rgba(236, 72, 153, 0.5);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
    }
  `,

  outline: css`
    background: transparent;
    color: #6366f1;
    border: 2px solid #6366f1;
    box-shadow: none;

    &:hover:not(:disabled) {
      background: rgba(99, 102, 241, 0.1);
      border-color: #5558e3;
      color: #5558e3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      background: rgba(99, 102, 241, 0.15);
    }
  `,

  ghost: css`
    background: transparent;
    color: #6366f1;
    border: none;
    box-shadow: none;

    &:hover:not(:disabled) {
      background: rgba(99, 102, 241, 0.1);
      color: #5558e3;
    }

    &:active:not(:disabled) {
      background: rgba(99, 102, 241, 0.15);
    }
  `,

  danger: css`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: #ffffff;
    border: none;
    box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.5);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
    }
  `,
};

const sizeStyles = {
  small: css`
    height: 36px;
    padding: 0 1rem;
    font-size: 0.875rem;
    border-radius: 8px;

    .icon-left,
    .icon-right {
      svg {
        width: 16px;
        height: 16px;
      }
    }
  `,

  medium: css`
    height: 44px;
    padding: 0 1.5rem;
    font-size: 0.9375rem;
    border-radius: 10px;

    .icon-left,
    .icon-right {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,

  large: css`
    height: 52px;
    padding: 0 2rem;
    font-size: 1.0625rem;
    border-radius: 12px;

    .icon-left,
    .icon-right {
      svg {
        width: 24px;
        height: 24px;
      }
    }
  `,
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $isFullWidth: boolean;
  $isLoading: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  user-select: none;
  white-space: nowrap;

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $isFullWidth }) => $isFullWidth && 'width: 100%;'}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
    `}
`;

export const ButtonContent = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1;

  .button-text {
    line-height: 1;
  }

  .icon-left,
  .icon-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LoaderWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${spin} 1s linear infinite;
  }
`;

export const Ripple = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%) scale(0);
  animation: ${rippleAnimation} 0.6s ease-out;
  pointer-events: none;
  z-index: 0;
`;