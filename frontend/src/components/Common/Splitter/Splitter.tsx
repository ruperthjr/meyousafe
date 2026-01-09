import React, { ReactNode } from 'react';
import {
  SplitterContainer,
  Line,
  ContentWrapper,
  GradientLine,
  DashedLine,
  DottedLine,
} from './Splitter.styles';

export type SplitterOrientation = 'horizontal' | 'vertical';
export type SplitterVariant = 'solid' | 'gradient' | 'dashed' | 'dotted';
export type SplitterContentVariant = 'default' | 'badge' | 'icon';

export interface SplitterProps {
  /**
   * Orientation of the splitter
   * @default 'horizontal'
   */
  orientation?: SplitterOrientation;

  /**
   * Visual style of the line
   * @default 'solid'
   */
  variant?: SplitterVariant;

  /**
   * Content to display in the center (text, icon, or element)
   */
  content?: ReactNode;

  /**
   * Style variant for the content wrapper
   * @default 'default'
   */
  contentVariant?: SplitterContentVariant;

  /**
   * Thickness of the line
   * @default '1px'
   */
  thickness?: string;

  /**
   * Color of the line (for solid variant)
   * @default '#e5e7eb'
   */
  color?: string;

  /**
   * Spacing around the splitter
   * @default '1.5rem'
   */
  spacing?: string;

  /**
   * Whether to show gradient on solid variant
   * @default false
   */
  gradient?: boolean;

  /**
   * Whether to animate the splitter
   * @default false
   */
  animated?: boolean;

  /**
   * Length of dashes (for dashed variant)
   * @default '8px'
   */
  dashLength?: string;

  /**
   * Gap between dashes (for dashed variant)
   * @default '4px'
   */
  gapLength?: string;

  /**
   * Size of dots (for dotted variant)
   * @default '4px'
   */
  dotSize?: string;

  /**
   * Spacing between dots (for dotted variant)
   * @default '8px'
   */
  dotSpacing?: string;

  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Splitter: React.FC<SplitterProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  content,
  contentVariant = 'default',
  thickness = '1px',
  color = '#e5e7eb',
  spacing = '1.5rem',
  gradient = false,
  animated = false,
  dashLength = '8px',
  gapLength = '4px',
  dotSize = '4px',
  dotSpacing = '8px',
  className,
}) => {
  const renderLine = () => {
    switch (variant) {
      case 'gradient':
        return <GradientLine $orientation={orientation} $thickness={thickness} />;

      case 'dashed':
        return (
          <DashedLine
            $orientation={orientation}
            $thickness={thickness}
            $color={color}
            $dashLength={dashLength}
            $gapLength={gapLength}
          />
        );

      case 'dotted':
        return (
          <DottedLine
            $orientation={orientation}
            $dotSize={dotSize}
            $color={color}
            $spacing={dotSpacing}
          />
        );

      case 'solid':
      default:
        return (
          <Line
            $orientation={orientation}
            $thickness={thickness}
            $color={color}
            $gradient={gradient}
            $animated={animated}
          />
        );
    }
  };

  return (
    <SplitterContainer
      className={className}
      $orientation={orientation}
      $spacing={spacing}
    >
      {renderLine()}
      
      {content && (
        <ContentWrapper $variant={contentVariant}>
          {content}
        </ContentWrapper>
      )}
      
      {renderLine()}
    </SplitterContainer>
  );
};

export default Splitter;