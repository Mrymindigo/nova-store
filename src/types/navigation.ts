export type NavLabelKey = 'home' | 'categories' | 'products';

export interface NavItem {
    labelKey: NavLabelKey;
    href: string;
}