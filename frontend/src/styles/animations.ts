import { keyframes, css } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const slideInUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInDown = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOutUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
`;

export const slideOutDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
`;

export const wiggle = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
`;

export const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  56% {
    transform: scale(1);
  }
`;

export const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(99, 102, 241, 0.6);
  }
`;

export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const animationMixin = {
  fadeIn: (duration = '0.3s', delay = '0s') => css`
    animation: ${fadeIn} ${duration} ease-in-out ${delay} both;
  `,
  fadeOut: (duration = '0.3s', delay = '0s') => css`
    animation: ${fadeOut} ${duration} ease-in-out ${delay} both;
  `,
  slideInUp: (duration = '0.4s', delay = '0s') => css`
    animation: ${slideInUp} ${duration} ease-out ${delay} both;
  `,
  slideInDown: (duration = '0.4s', delay = '0s') => css`
    animation: ${slideInDown} ${duration} ease-out ${delay} both;
  `,
  slideInLeft: (duration = '0.4s', delay = '0s') => css`
    animation: ${slideInLeft} ${duration} ease-out ${delay} both;
  `,
  slideInRight: (duration = '0.4s', delay = '0s') => css`
    animation: ${slideInRight} ${duration} ease-out ${delay} both;
  `,
  scaleIn: (duration = '0.3s', delay = '0s') => css`
    animation: ${scaleIn} ${duration} ease-out ${delay} both;
  `,
  pulse: (duration = '2s') => css`
    animation: ${pulse} ${duration} ease-in-out infinite;
  `,
  bounce: (duration = '1s') => css`
    animation: ${bounce} ${duration} ease-in-out infinite;
  `,
  spin: (duration = '1s') => css`
    animation: ${spin} ${duration} linear infinite;
  `,
  shake: (duration = '0.5s') => css`
    animation: ${shake} ${duration} ease-in-out;
  `,
  wiggle: (duration = '0.5s') => css`
    animation: ${wiggle} ${duration} ease-in-out;
  `,
  float: (duration = '3s') => css`
    animation: ${float} ${duration} ease-in-out infinite;
  `,
  glow: (duration = '2s') => css`
    animation: ${glow} ${duration} ease-in-out infinite;
  `,
  shimmer: (duration = '2s') => css`
    background-size: 200% 100%;
    animation: ${shimmer} ${duration} infinite;
  `,
};

export default {
  fadeIn,
  fadeOut,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideOutUp,
  slideOutDown,
  scaleIn,
  scaleOut,
  rotate,
  spin,
  pulse,
  bounce,
  shake,
  wiggle,
  heartbeat,
  ripple,
  shimmer,
  float,
  glow,
  typing,
  blink,
  gradientShift,
  animationMixin,
};