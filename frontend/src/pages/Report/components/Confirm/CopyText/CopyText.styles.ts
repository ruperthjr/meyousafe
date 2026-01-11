import styled from 'styled-components';

export const CopyContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const CopyTextContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: monospace;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 2px;
  text-align: center;
`;

export const CopyButton = styled.button<{ $copied: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme, $copied }) =>
    $copied ? theme.colors.primary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;