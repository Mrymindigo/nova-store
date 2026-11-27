import { Locale } from '../types/enums/Locale';

export const getDirection = (locale: string): 'rtl' | 'ltr' =>
    locale === Locale.Fa ? 'rtl' : 'ltr';