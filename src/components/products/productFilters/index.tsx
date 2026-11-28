'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '../../../utils/navigation';
import { RoutePath } from '../../../types/enums/RoutPath';
import { ProductSort } from '../../../types/enums/ProductSort';
import { sortOptions } from '../../../utils/constants/productSort';
import { getCategoryKey } from '../../../utils/categoryKeys';
import { toSearchParams } from '../../../utils/productQuery';
import type { ProductQuery } from '../../../types/productQuery';
import { Wrapper, Field, Select } from './style';

interface ProductFiltersProps {
    categories: string[];
    query: ProductQuery;
}

export default function ProductFilters({ categories, query }: ProductFiltersProps) {
    const t = useTranslations('productsSection.filters');
    const tSort = useTranslations('productsSection.sort');
    const tCategories = useTranslations('categories');
    const router = useRouter();

    // با هر تغییر فیلتر، به صفحه ۱ برگرد
    const update = (changes: Partial<ProductQuery>) => {
        router.replace(
            { pathname: RoutePath.Home, query: toSearchParams({ ...query, ...changes, page: 1 }) },
            { scroll: false },
        );
    };

    return (
        <Wrapper>
            <Field>
                {t('category')}
                <Select value={query.category} onChange={(event) => update({ category: event.target.value })}>
                    <option value="">{t('allCategories')}</option>
                    {categories.map((category) => {
                        const key = getCategoryKey(category);
                        return (
                            <option key={category} value={category}>
                                {key ? tCategories(key) : category}
                            </option>
                        );
                    })}
                </Select>
            </Field>

            <Field>
                {t('sort')}
                <Select
                    value={query.sort}
                    onChange={(event) => update({ sort: event.target.value as ProductSort })}
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {tSort(option.labelKey)}
                        </option>
                    ))}
                </Select>
            </Field>
        </Wrapper>
    );
}