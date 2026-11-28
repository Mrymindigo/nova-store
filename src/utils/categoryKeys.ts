import type { Dictionary } from '../dictionary';

export type CategoryKey = keyof Dictionary['categories'];

// به خاطر فاصله توی اسم های اصلی ارور داد
const CATEGORY_KEYS: Record<string, CategoryKey> = {
    electronics: 'electronics',
    jewelery: 'jewelery', 
    "men's clothing": 'mensClothing',
    "women's clothing": 'womensClothing',
};

export const getCategoryKey = (category: string): CategoryKey | null =>
    CATEGORY_KEYS[category] ?? null;