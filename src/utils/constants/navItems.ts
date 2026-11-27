import { RoutePath, SectionId } from '../../types/enums/RoutPath';
import type { NavItem } from '../../types/navigation';

export const navItems: NavItem[] = [
    { labelKey: 'home', href: RoutePath.Home },
    { labelKey: 'categories', href: `${RoutePath.Home}#${SectionId.Categories}` },
    { labelKey: 'products', href: `${RoutePath.Home}#${SectionId.Products}` },
];