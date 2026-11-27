import { ThemeMode } from '../../types/enums/ThemeMode';
import type { AppTheme } from '../../types/theme';

export const lightTheme: AppTheme = {
    mode: ThemeMode.Light,
    colors: {
        primary: '#0f1f3d',
        accent: '#f97316',
        accentHover: '#ea580c',
        background: '#faf8f5',
        secondary: '#ffffff',
        secondaryAlt: '#f1f5f9',
        text: '#0f1f3d',
        textMuted: '#64748b',
        border: '#e5e7eb',
        footer: '#0f1f3d',
        success: '#15803d',
        danger: '#b91c1c',
    },
    radius: { sm: '6px', md: '10px', lg: '16px' },
    shadow: { card: '0 1px 3px rgba(15, 31, 61, 0.08)' },
    spacing: (n) => `${n * 4}px`,
};