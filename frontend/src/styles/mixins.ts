import { css } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark';
    colors: {
      border: string;
      surface: string;
      background: string;
      primary: string;
      text: {
        primary: string;
        tertiary: string;
        disabled: string;
      };
      shadow: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    borderRadius: {
      full: string;
      lg: string;
      md: string;
    };
    spacing: {
      lg: string;
      md: string;
      xl: string;
      sm: string;
    };
    transitions: {
      normal: string;
      fast: string;
    };
    typography: {
      fontSize: {
        base: string;
      };
      fontWeight: {
        semibold: number | string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      largeDesktop: string;
    };
  }
}

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const lineClamp = (lines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const hideScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const customScrollbar = css`
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.border} ${({ theme }) => theme.colors.surface};

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    &:hover {
      background: ${({ theme }) => theme.colors.text.tertiary};
    }
  }
`;

export const shadow = (level: 'sm' | 'md' | 'lg' | 'xl' = 'md') => {
  const shadows = {
    sm: css`
      box-shadow: 0 1px 2px 0 ${({ theme }) => theme.colors.shadow.sm};
    `,
    md: css`
      box-shadow: 0 4px 6px -1px ${({ theme }) => theme.colors.shadow.md},
        0 2px 4px -1px ${({ theme }) => theme.colors.shadow.sm};
    `,
    lg: css`
      box-shadow: 0 10px 15px -3px ${({ theme }) => theme.colors.shadow.lg},
        0 4px 6px -2px ${({ theme }) => theme.colors.shadow.md};
    `,
    xl: css`
      box-shadow: 0 20px 25px -5px ${({ theme }) => theme.colors.shadow.xl},
        0 10px 10px -5px ${({ theme }) => theme.colors.shadow.lg};
    `,
  };
  return shadows[level];
};

export const gradient = (from: string, to: string, direction = '135deg') => css`
  background: linear-gradient(${direction}, ${from} 0%, ${to} 100%);
`;

export const glassmorphism = css`
  background: ${({ theme }) =>
    theme.name === 'dark'
      ? 'rgba(30, 41, 59, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) =>
    theme.name === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};
`;

export const hoverScale = (scale = 1.05) => css`
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: scale(${scale});
  }

  &:active {
    transform: scale(${scale * 0.95});
  }
`;

export const hoverLift = css`
  transition: transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    ${shadow('lg')};
  }

  &:active {
    transform: translateY(-2px);
  }
`;

export const focusRing = css`
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}40;
  }
`;

export const aspectRatio = (width: number, height: number) => css`
  position: relative;
  padding-bottom: ${(height / width) * 100}%;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const mediaQuery = {
  mobile: (styles: ReturnType<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: ReturnType<typeof css>) => css`
    @media (min-width: calc(${({ theme }) => theme.breakpoints.mobile} + 1px)) and
      (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: ReturnType<typeof css>) => css`
    @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} + 1px)) {
      ${styles}
    }
  `,
  largeDesktop: (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
      ${styles}
    }
  `,
};

export const container = css`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  ${mediaQuery.mobile(css`
    padding: 0 ${({ theme }) => theme.spacing.md};
  `)}
`;

export const grid = (columns: number, gap?: string) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: ${gap || (({ theme }) => theme.spacing.lg)};

  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
`;

export const card = css`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  ${shadow('md')};
  transition: all ${({ theme }) => theme.transitions.normal};
`;

export const input = css`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;

export const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  ${focusRing}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default {
  flexCenter,
  flexBetween,
  flexColumn,
  absoluteCenter,
  truncateText,
  lineClamp,
  visuallyHidden,
  hideScrollbar,
  customScrollbar,
  shadow,
  gradient,
  glassmorphism,
  hoverScale,
  hoverLift,
  focusRing,
  aspectRatio,
  mediaQuery,
  container,
  grid,
  card,
  input,
  button,
};