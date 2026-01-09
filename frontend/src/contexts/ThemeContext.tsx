import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import * as ThemeModule from '../styles/theme';
export type Theme = DefaultTheme;

const lightTheme: Theme = ((ThemeModule as any).lightTheme ?? (ThemeModule as any).light ?? (ThemeModule as any).themes?.light ?? (ThemeModule as any).default?.light) as Theme;
const darkTheme: Theme = ((ThemeModule as any).darkTheme ?? (ThemeModule as any).dark ?? (ThemeModule as any).themes?.dark ?? (ThemeModule as any).default?.dark ?? lightTheme) as Theme;

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'light',
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('meyousafe_theme_mode');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : defaultMode;
    }
    return defaultMode;
  });

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    try {
      localStorage.setItem('meyousafe_theme_mode', mode);
      document.documentElement.setAttribute('data-theme', mode);
    } catch (error) {
      console.error('Failed to save theme preference:', error);
    }
  }, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('meyousafe_theme_mode');
      if (!savedTheme) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const setThemeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const value: ThemeContextType = {
    theme,
    mode,
    toggleTheme,
    setTheme: setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;