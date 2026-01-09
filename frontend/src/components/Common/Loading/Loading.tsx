import React from 'react';
import {
  LoadingContainer,
  LoadingSpinner,
  SpinnerRing,
  LoadingDots,
  Dot,
  LoadingText,
  LoadingOverlay,
  LoadingPulse,
  PulseCircle,
} from './Loading.styles';

export type LoadingVariant = 'spinner' | 'dots' | 'pulse';
export type LoadingSize = 'small' | 'medium' | 'large';

export interface LoadingProps {
  variant?: LoadingVariant;
  size?: LoadingSize;
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
  color?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  variant = 'spinner',
  size = 'medium',
  text,
  fullScreen = false,
  overlay = false,
  color,
  className,
}) => {
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <LoadingDots $size={size} $color={color}>
            <Dot $delay={0} />
            <Dot $delay={0.2} />
            <Dot $delay={0.4} />
          </LoadingDots>
        );

      case 'pulse':
        return (
          <LoadingPulse $size={size} $color={color}>
            <PulseCircle $delay={0} />
            <PulseCircle $delay={0.3} />
            <PulseCircle $delay={0.6} />
          </LoadingPulse>
        );

      case 'spinner':
      default:
        return (
          <LoadingSpinner $size={size} $color={color}>
            <SpinnerRing />
            <SpinnerRing />
            <SpinnerRing />
          </LoadingSpinner>
        );
    }
  };

  const content = (
    <LoadingContainer
      className={className}
      $fullScreen={fullScreen}
      $overlay={overlay}
    >
      {renderLoader()}
      {text && <LoadingText $size={size}>{text}</LoadingText>}
    </LoadingContainer>
  );

  if (overlay) {
    return <LoadingOverlay>{content}</LoadingOverlay>;
  }

  return content;
};

export default Loading;