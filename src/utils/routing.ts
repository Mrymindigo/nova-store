import { defineRouting } from 'next-intl/routing';
import { Locale } from '../types/enums/Locale';

export const routing = defineRouting({
    locales: [Locale.Fa, Locale.En],
    defaultLocale: Locale.Fa,
});