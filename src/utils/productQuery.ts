import { ProductSort } from '../types/enums/ProductSort';
import type { ProductQuery, RawSearchParams } from '../types/productQuery';

const getFirst = (value: string | string[] | undefined): string | undefined =>
    Array.isArray(value) ? value[0] : value;

// change to valid value
export const parseProductQuery = (raw: RawSearchParams): ProductQuery => {
    const q = (getFirst(raw.q) ?? '').trim();
    const category = getFirst(raw.category) ?? '';

    const sortValue = getFirst(raw.sort);
    const sort = Object.values(ProductSort).includes(sortValue as ProductSort)
        ? (sortValue as ProductSort)
        : ProductSort.Default;

    const pageNumber = Number(getFirst(raw.page));
    const page = Number.isInteger(pageNumber) && pageNumber > 0 ? pageNumber : 1;

    return { q, category, sort, page };
};

// clean dwffult value
export const toSearchParams = (query: ProductQuery): Record<string, string> => {
    const params: Record<string, string> = {};

    if (query.q) params.q = query.q;
    if (query.category) params.category = query.category;
    if (query.sort !== ProductSort.Default) params.sort = query.sort;
    if (query.page > 1) params.page = String(query.page);

    return params;
};