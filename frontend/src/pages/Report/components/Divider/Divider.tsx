import React from 'react';
import { DividerLine, DividerText, DividerContainer } from './Divider.styles';

export interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ text, className }) => {
  if (text) {
    return (
      <DividerContainer className={className}>
        <DividerLine />
        <DividerText>{text}</DividerText>
        <DividerLine />
      </DividerContainer>
    );
  }

  return <DividerLine className={className} />;
};

export default Divider;