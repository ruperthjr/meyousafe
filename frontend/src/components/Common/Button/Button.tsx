import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { StyledButton, ButtonContent, LoaderWrapper, Ripple } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  isFullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading || disabled) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $isFullWidth={isFullWidth}
      $isLoading={isLoading}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <Ripple key={ripple.id} style={{ left: ripple.x, top: ripple.y }} />
      ))}

      <ButtonContent>
        {isLoading && (
          <LoaderWrapper>
            <Loader2 size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
          </LoaderWrapper>
        )}
        {!isLoading && leftIcon && <span className="icon-left">{leftIcon}</span>}
        <span className="button-text">{children}</span>
        {!isLoading && rightIcon && <span className="icon-right">{rightIcon}</span>}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;