import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CopyContainer, CopyTextContent, CopyButton } from './CopyText.styles';

export interface CopyTextProps {
  text: string;
  label?: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <CopyContainer>
      {label && <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>{label}</div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CopyTextContent>{text}</CopyTextContent>
        <CopyButton onClick={handleCopy} $copied={copied}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </CopyButton>
      </div>
    </CopyContainer>
  );
};

export default CopyText;