import type { ThemeMode } from './enums/ThemeMode';

export interface AppTheme {
    mode: ThemeMode;
    colors: {
        primary: string;
        accent: string;
        accentHover: string;
        background: string;
        secondary: string;
        secondaryAlt: string;
        text: string;
        textMuted: string;
        border: string;
        footer: string;
        success: string;
        danger: string;
    };
    radius: { sm: string; md: string; lg: string };
    shadow: { card: string };
    spacing: (n: number) => string;
}