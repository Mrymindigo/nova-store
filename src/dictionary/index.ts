import { Locale } from '../types/enums/Locale';
import { en } from './en';
import { fa } from './fa';
import type { Dictionary } from './en';

export const dictionaries: Record<Locale, Dictionary> = {
    [Locale.En]: en,
    [Locale.Fa]: fa,
};

export type { Dictionary };