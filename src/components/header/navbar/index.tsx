'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '../../../utils/navigation';
import { navItems } from '../../../utils/constants/navItems';
import { Nav, List, NavLink } from './style';

export default function Navbar() {
    const t = useTranslations('header.nav');
    const pathname = usePathname();

    return (
        <Nav aria-label={t('label')}>
            <List>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <li key={item.labelKey}>
                            <NavLink
                                href={item.href}
                                $active={isActive}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {t(item.labelKey)}
                            </NavLink>
                        </li>
                    );
                })}
            </List>
        </Nav>
    );
}