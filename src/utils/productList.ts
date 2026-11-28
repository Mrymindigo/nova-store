import { ProductSort } from '../types/enums/ProductSort';
import type { Product } from '../types/product';
import type { ProductQuery } from '../types/productQuery';

export const filterProducts = (products: Product[], query: ProductQuery): Product[] => {
    const text = query.q.toLowerCase();

    return products.filter((product) => {
        const matchesText = !text || product.title.toLowerCase().includes(text);
        const matchesCategory = !query.category || product.category === query.category;
        return matchesText && matchesCategory;
    });
};

export const sortProducts = (products: Product[], sort: ProductSort): Product[] => {
    switch (sort) {
        case ProductSort.PriceAsc:
            return [...products].sort((a, b) => a.price - b.price);
        case ProductSort.PriceDesc:
            return [...products].sort((a, b) => b.price - a.price);
        case ProductSort.TitleAsc:
            return [...products].sort((a, b) => a.title.localeCompare(b.title, 'en'));
        default:
            return products;
    }
};