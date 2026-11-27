import { ThemeMode } from '../../types/enums/ThemeMode';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
    [ThemeMode.Light]: lightTheme,
    [ThemeMode.Dark]: darkTheme,
};