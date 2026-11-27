import { ThemeMode } from '../../types/enums/ThemeMode';
import type { AppTheme } from '../../types/theme';

export const darkTheme: AppTheme = {
    mode: ThemeMode.Dark,
    colors: {
        primary: '#e2e8f0',
        accent: '#fb923c',
        accentHover: '#f97316',
        background: '#0b1220',
        secondary: '#131c2e',
        secondaryAlt: '#1a2540',
        text: '#e2e8f0',
        textMuted: '#94a3b8',
        border: '#243049',
        footer: '#0a101c',
        success: '#4ade80',
        danger: '#f87171',
    },
    radius: { sm: '6px', md: '10px', lg: '16px' },
    shadow: { card: '0 1px 3px rgba(0, 0, 0, 0.5)' },
    spacing: (n) => `${n * 4}px`,
};