import { ThemeMode } from '../types/enums/ThemeMode';

export const parseThemeMode = (value: string | undefined): ThemeMode =>
    value === ThemeMode.Light ? ThemeMode.Light : ThemeMode.Dark;