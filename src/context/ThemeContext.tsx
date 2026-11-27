'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../shared/theme';
import { GlobalStyle } from '../shared/GlobalStyle';
import { ThemeMode } from '../types/enums/ThemeMode';
import { THEME_COOKIE, THEME_COOKIE_MAX_AGE } from '../utils/constants/theme';

interface ThemeContextValue {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
    initialMode: ThemeMode;
    children: ReactNode;
}

export function ThemeProvider({ initialMode, children }: ThemeProviderProps) {
    const [mode, setModeState] = useState<ThemeMode>(initialMode);

    const setMode = useCallback((next: ThemeMode) => {
        setModeState(next);
        document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=${THEME_COOKIE_MAX_AGE}; samesite=lax`;
    }, []);

    const toggleMode = useCallback(() => {
        setMode(mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
    }, [mode, setMode]);

    const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode, setMode, toggleMode]);

    return (
        <ThemeContext.Provider value={value}>
            <StyledThemeProvider theme={themes[mode]}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export const useThemeMode = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeMode must be used inside ThemeProvider');
    return context;
};