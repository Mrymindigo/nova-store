import type { Dictionary } from './en';

export const fa: Dictionary = {
    metadata: {
        title: 'فروشگاه NOVA',
        description:
            'مجموعه‌ای از محصولات متنوع را در فروشگاه نوا ببینید و با تجربه‌ای مدرن، به‌سادگی خرید کنید و سبد خرید خود را مدیریت کنید.',
    },
    header: {
        theme: { toDark: 'تغییر به حالت تیره', toLight: 'تغییر به حالت روشن' },
        search: { placeholder: 'جستجو در محصولات...', label: 'جستجو' },
        nav: {
            label: 'ناوبری اصلی',
            home: 'خانه',
            categories: 'دسته‌بندی‌ها',
            products: 'محصولات',
        },
        menu: { title: 'منو', open: 'باز کردن منو', close: 'بستن منو' },
        cart: { label: 'سبد خرید، {count} کالا' },
    },
    hero: {
        title: "انتخاب هوشمندانه، خرید آسان",
        description: "با نوا، تجربه خریدی متفاوت را تجربه کنید",
        cta: "مشاهده محصولات",
    },
    product: {
        addToCart: 'افزودن به سبد',
        rating: 'امتیاز {rate, number} از ۵ از {count, number} نظر',
    },
    categories: {
        electronics: 'کالای دیجیتال',
        jewelery: 'زیورآلات',
        mensClothing: 'پوشاک مردانه',
        womensClothing: 'پوشاک زنانه',
    },
    categorySection: { title: 'دسته‌بندی‌ها' },
    productsSection: {
        title: 'محصولات منتخب',
        loading: 'در حال بارگذاری محصولات',
        empty: 'در حال حاضر محصولی موجود نیست',
        noResults: 'محصولی با این جستجو یا فیلتر پیدا نشد',
        error: 'دریافت محصولات انجام نشد. دوباره تلاش کنید.',
        retry: 'تلاش مجدد',
        filters: {
            category: 'دسته‌بندی',
            allCategories: 'همه دسته‌بندی‌ها',
            sort: 'مرتب‌سازی بر اساس',
        },
        sort: {
            default: 'پیش‌فرض',
            priceAsc: 'قیمت: کم به زیاد',
            priceDesc: 'قیمت: زیاد به کم',
            titleAsc: 'عنوان: الف تا ی',
        },
        pagination: {
            label: 'صفحه‌های محصولات',
            previous: 'صفحه قبل',
            next: 'صفحه بعد',
            page: 'صفحه {page, number}',
        },
    },
};