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
};