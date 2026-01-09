import styled, { keyframes, css } from 'styled-components';
import { LoadingSize } from './Loading';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const sizeMap: Record<LoadingSize, { spinner: string; dot: string; pulse: string; text: string }> = {
  small: { spinner: '32px', dot: '8px', pulse: '40px', text: '0.875rem' },
  medium: { spinner: '48px', dot: '12px', pulse: '60px', text: '0.9375rem' },
  large: { spinner: '64px', dot: '16px', pulse: '80px', text: '1.0625rem' },
};

export const LoadingContainer = styled.div<{
  $fullScreen: boolean;
  $overlay: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  animation: ${fadeIn} 0.3s ease-in-out;

  ${({ $fullScreen }) =>
    $fullScreen &&
    css`
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
      backdrop-filter: blur(8px);
    `}

  ${({ $overlay }) =>
    !$overlay &&
    css`
      padding: 2rem;
    `}
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const LoadingSpinner = styled.div<{ $size: LoadingSize; $color?: string }>`
  position: relative;
  width: ${({ $size }) => sizeMap[$size].spinner};
  height: ${({ $size }) => sizeMap[$size].spinner};
`;

export const SpinnerRing = styled.div<{ $color?: string }>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: ${({ $color }) => $color || '#6366f1'};
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.45s;
    border-top-color: ${({ $color }) => $color || '#6366f1'};
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
    border-top-color: ${({ $color }) => $color || '#8b5cf6'};
    inset: 15%;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
    border-top-color: ${({ $color }) => $color || '#a78bfa'};
    inset: 30%;
  }
`;

export const LoadingDots = styled.div<{ $size: LoadingSize; $color?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ $size }) => (sizeMap[$size].dot === '8px' ? '6px' : sizeMap[$size].dot === '12px' ? '10px' : '14px')};
`;

export const Dot = styled.div<{ $size?: LoadingSize; $delay: number; $color?: string }>`
  width: ${({ $size }) => sizeMap[$size ?? 'medium'].dot};
  height: ${({ $size }) => sizeMap[$size ?? 'medium'].dot};
  background: ${({ $color }) => $color || '#6366f1'};
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  &:nth-child(2) {
    background: ${({ $color }) => $color || '#8b5cf6'};
  }

  &:nth-child(3) {
    background: ${({ $color }) => $color || '#a78bfa'};
  }
`;

export const LoadingPulse = styled.div<{ $size: LoadingSize; $color?: string }>`
  position: relative;
  width: ${({ $size }) => sizeMap[$size].pulse};
  height: ${({ $size }) => sizeMap[$size].pulse};
`;

export const PulseCircle = styled.div<{ $delay: number; $color?: string }>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: ${({ $color }) => $color || '#6366f1'};
  opacity: 0;
  animation: ${pulse} 2s ease-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  &:nth-child(2) {
    background: ${({ $color }) => $color || '#8b5cf6'};
  }

  &:nth-child(3) {
    background: ${({ $color }) => $color || '#a78bfa'};
  }
`;

export const LoadingText = styled.p<{ $size: LoadingSize }>`
  margin: 0;
  font-size: ${({ $size }) => sizeMap[$size].text};
  font-weight: 500;
  color: #6366f1;
  text-align: center;
  letter-spacing: 0.02em;
`;