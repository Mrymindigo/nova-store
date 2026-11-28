import { getTranslations } from 'next-intl/server';
import { getCategories, getProducts } from '../../../requests/productRequests';
import { filterProducts, sortProducts } from '../../../utils/productList';
import { getTotalPages, paginate } from '../../../utils/paginate';
import { PRODUCTS_PAGE_SIZE } from '../../../utils/constants/pagination';
import type { Product } from '../../../types/product';
import type { ProductQuery } from '../../../types/productQuery';
import ProductFilters from '../productFilters';
import ProductGrid from '../productGrid';
import Pagination from '../pagination';
import StateMessage from '../stateMessage';

export default async function ProductsContent({ query }: { query: ProductQuery }) {
    const t = await getTranslations('productsSection');

    let products: Product[];
    let categories: string[];

    try {
        [products, categories] = await Promise.all([getProducts(), getCategories()]);
    } catch {
        return <StateMessage message={t('error')} retryLabel={t('retry')} />;
    }

    if (products.length === 0) {
        return <StateMessage message={t('empty')} />;
    }

    const filtered = sortProducts(filterProducts(products, query), query.sort);
    const totalPages = getTotalPages(filtered.length, PRODUCTS_PAGE_SIZE);
    const currentPage = Math.min(query.page, totalPages); // ?page=99 را به آخرین صفحه می‌آورد
    const visibleProducts = paginate(filtered, currentPage, PRODUCTS_PAGE_SIZE);

    return (
        <>
            <ProductFilters categories={categories} query={query} />

            {filtered.length === 0 ? (
                <StateMessage message={t('noResults')} />
            ) : (
                <>
                    <ProductGrid products={visibleProducts} />
                    {totalPages > 1 && (
                        <Pagination query={query} currentPage={currentPage} totalPages={totalPages} />
                    )}
                </>
            )}
        </>
    );
}