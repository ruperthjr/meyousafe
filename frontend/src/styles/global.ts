import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => (theme.typography as any).fontFamily?.primary ?? 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => (theme.typography as any).fontWeight?.normal ?? 'normal'};
    line-height: ${({ theme }) => (theme.typography as any).lineHeight?.normal ?? '1.5'};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color ${({ theme }) => theme.transitions.normal},
                color ${({ theme }) => theme.transitions.normal};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => (theme.typography as any).fontFamily?.secondary ?? 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => (theme.typography as any).lineHeight?.tight ?? '1.125'};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 {
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['4xl']};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  h2 {
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h3 {
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h4 {
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['xl']};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  h5 {
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['lg']};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.md};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
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
      background-color: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.text.disabled};
      cursor: not-allowed;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  code {
    font-family: ${({ theme }) => (theme.typography as any).fontFamily?.mono ?? 'SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace'};
    font-size: 0.875em;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 0.125rem 0.375rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  pre {
    font-family: ${({ theme }) => (theme.typography as any).fontFamily?.mono ?? 'SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace'};
    font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['sm']};
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    code {
      background: none;
      padding: 0;
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    margin: ${({ theme }) => theme.spacing.xl} 0;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin: ${({ theme }) => theme.spacing.lg} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  th,
  td {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-align: left;
  }

  th {
    background-color: ${({ theme }) => theme.colors.surface};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    &:hover {
      background: ${({ theme }) => theme.colors.text.tertiary};
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['3xl']};
    }

    h2 {
      font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['2xl']};
    }

    h3 {
      font-size: ${({ theme }) => (theme.typography.fontSize as Record<string, string>)['xl']};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;