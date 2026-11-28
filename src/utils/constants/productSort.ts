import { ProductSort } from '../../types/enums/ProductSort';

export const sortOptions = [
    { value: ProductSort.Default, labelKey: 'default' },
    { value: ProductSort.PriceAsc, labelKey: 'priceAsc' },
    { value: ProductSort.PriceDesc, labelKey: 'priceDesc' },
    { value: ProductSort.TitleAsc, labelKey: 'titleAsc' },
] as const;