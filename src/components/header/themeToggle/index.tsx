'use client';

import { useTranslations } from 'next-intl';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useThemeMode } from '../../../context/ThemeContext';
import { ThemeMode } from '../../../types/enums/ThemeMode';
import { ToggleButton } from './style';

export default function ThemeToggle() {
    const t = useTranslations('header.theme');
    const { mode, toggleMode } = useThemeMode();
    const isLight = mode === ThemeMode.Light;

    return (
        <ToggleButton
            type="button"
            onClick={toggleMode}
            aria-label={isLight ? t('toDark') : t('toLight')}
        >
            {isLight ? <LuMoon /> : <LuSun />}
        </ToggleButton>
    );
}