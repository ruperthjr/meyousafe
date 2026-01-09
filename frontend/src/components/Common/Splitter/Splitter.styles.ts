import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const SplitterContainer = styled.div<{ 
  $orientation: 'horizontal' | 'vertical';
  $spacing?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${fadeIn} 0.4s ease-in-out;

  ${({ $orientation, $spacing = '1.5rem' }) =>
    $orientation === 'horizontal'
      ? css`
          flex-direction: row;
          gap: ${$spacing};
          margin: ${$spacing} 0;
        `
      : css`
          flex-direction: column;
          gap: ${$spacing};
          margin: 0 ${$spacing};
          height: 100%;
        `}
`;

export const Line = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $thickness?: string;
  $color?: string;
  $gradient?: boolean;
  $animated?: boolean;
}>`
  ${({ $orientation, $thickness = '1px', $color = '#e5e7eb', $gradient, $animated }) => {
    const baseStyles = css`
      background: ${$gradient
        ? 'linear-gradient(90deg, transparent, #e5e7eb, transparent)'
        : $color};
      flex: 1;
      position: relative;
      overflow: hidden;
    `;

    const orientationStyles =
      $orientation === 'horizontal'
        ? css`
            height: ${$thickness};
            width: 100%;
            min-width: 40px;
          `
        : css`
            width: ${$thickness};
            height: 100%;
            min-height: 40px;
          `;

    const animationStyles = $animated
      ? css`
          animation: ${slideIn} 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: ${$orientation === 'horizontal' ? 'left' : 'top'};

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              ${$orientation === 'horizontal' ? '90deg' : '180deg'},
              transparent,
              rgba(99, 102, 241, 0.5),
              transparent
            );
            animation: ${$orientation === 'horizontal' ? shimmerH : shimmerV} 2s infinite;
          }
        `
      : '';

    return css`
      ${baseStyles}
      ${orientationStyles}
      ${animationStyles}
    `;
  }}
`;

const shimmerH = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const shimmerV = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const ContentWrapper = styled.div<{
  $variant?: 'default' | 'badge' | 'icon';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;

  ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'badge':
        return css`
          padding: 0.375rem 0.875rem;
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
          border-radius: 20px;
          border: 2px solid #e5e7eb;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #6b7280;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;

          &:hover {
            border-color: #6366f1;
            color: #6366f1;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
          }
        `;

      case 'icon':
        return css`
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
          transition: all 0.3s ease;

          svg {
            width: 20px;
            height: 20px;
          }

          &:hover {
            background: linear-gradient(135deg, #5558e3 0%, #7c3aed 100%);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
            transform: scale(1.1);
          }
        `;

      default:
        return css`
          padding: 0.25rem 0.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #6b7280;
          white-space: nowrap;
        `;
    }
  }}
`;

export const GradientLine = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $thickness?: string;
}>`
  ${({ $orientation, $thickness = '2px' }) =>
    $orientation === 'horizontal'
      ? css`
          height: ${$thickness};
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #6366f1 20%,
            #8b5cf6 50%,
            #a78bfa 80%,
            transparent 100%
          );
          flex: 1;
          min-width: 40px;
        `
      : css`
          width: ${$thickness};
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent 0%,
            #6366f1 20%,
            #8b5cf6 50%,
            #a78bfa 80%,
            transparent 100%
          );
          flex: 1;
          min-height: 40px;
        `}
  border-radius: ${props => props.$thickness ?? '2px'};
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const DashedLine = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $thickness?: string;
  $color?: string;
  $dashLength?: string;
  $gapLength?: string;
}>`
  ${({ $orientation, $thickness = '1px', $color = '#e5e7eb', $dashLength = '8px', $gapLength = '4px' }) =>
    $orientation === 'horizontal'
      ? css`
          height: ${$thickness};
          width: 100%;
          background-image: linear-gradient(
            to right,
            ${$color} ${$dashLength},
            transparent ${$dashLength},
            transparent calc(${$dashLength} + ${$gapLength})
          );
          background-size: calc(${$dashLength} + ${$gapLength}) ${$thickness};
          background-repeat: repeat-x;
          flex: 1;
          min-width: 40px;
        `
      : css`
          width: ${$thickness};
          height: 100%;
          background-image: linear-gradient(
            to bottom,
            ${$color} ${$dashLength},
            transparent ${$dashLength},
            transparent calc(${$dashLength} + ${$gapLength})
          );
          background-size: ${$thickness} calc(${$dashLength} + ${$gapLength});
          background-repeat: repeat-y;
          flex: 1;
          min-height: 40px;
        `}
`;

export const DottedLine = styled.div<{
  $orientation: 'horizontal' | 'vertical';
  $dotSize?: string;
  $color?: string;
  $spacing?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${({ $orientation, $dotSize = '4px', $color = '#e5e7eb', $spacing = '8px' }) =>
    $orientation === 'horizontal'
      ? css`
          flex-direction: row;
          gap: ${$spacing};
          width: 100%;
          min-width: 40px;

          &::before,
          &::after {
            content: '';
            width: ${$dotSize};
            height: ${$dotSize};
            background: ${$color};
            border-radius: 50%;
          }
        `
      : css`
          flex-direction: column;
          gap: ${$spacing};
          height: 100%;
          min-height: 40px;

          &::before,
          &::after {
            content: '';
            width: ${$dotSize};
            height: ${$dotSize};
            background: ${$color};
            border-radius: 50%;
          }
        `}
`;