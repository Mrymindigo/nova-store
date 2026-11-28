export const en = {
    metadata: {
        title: 'NOVA Store',
        description:
            'Discover and explore a wide range of products at NOVA Store. Enjoy a modern shopping experience with easy product browsing and cart management.',
    },
    header: {
        theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
        search: { placeholder: 'Search products...', label: 'Search' },
        nav: {
            label: 'Main navigation',
            home: 'Home',
            categories: 'Categories',
            products: 'Products',
        },
        menu: { title: 'Menu', open: 'Open menu', close: 'Close menu' },
        cart: { label: 'Shopping cart, {count} items' },
    },

    hero: {
        title: "Smart Choices, Easy Shopping",
        description: "Enjoy a different shopping experience with Nova",
        cta: "Explore Products",
    },
    product: {
        addToCart: 'Add to cart',
        rating: 'Rating {rate, number} out of 5 from {count, number} reviews',
    },
    categories: {
        electronics: 'Electronics',
        jewelery: 'Jewelry',
        mensClothing: "Men's clothing",
        womensClothing: "Women's clothing",
    },
    categorySection: { title: 'Categories' },
    productsSection: {
        title: 'Featured products',
        loading: 'Loading products',
        empty: 'No products available right now',
        noResults: 'No products match your search or filters',
        error: 'Could not load products. Please try again.',
        retry: 'Try again',
        filters: {
            category: 'Category',
            allCategories: 'All categories',
            sort: 'Sort by',
        },
        sort: {
            default: 'Default',
            priceAsc: 'Price: low to high',
            priceDesc: 'Price: high to low',
            titleAsc: 'Title: A to Z',
        },
        pagination: {
            label: 'Products pages',
            previous: 'Previous page',
            next: 'Next page',
            page: 'Page {page, number}',
        },
    },
};

export type Dictionary = typeof en;