import { ThemeMode } from '../types/enums/ThemeMode';

export const parseThemeMode = (value: string | undefined): ThemeMode =>
    value === ThemeMode.Dark ? ThemeMode.Dark : ThemeMode.Light;