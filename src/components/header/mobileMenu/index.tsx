'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LuMenu, LuX } from 'react-icons/lu';
import SearchBox from '../searchBox';
import { navItems } from '../../../utils/constants/navItems';
import { MenuButton, Overlay, Panel, PanelHeader, PanelLogo, CloseButton, MenuList, MenuLink, } from './style';

const PANEL_ID = 'mobile-menu';

export default function MobileMenu() {
    const t = useTranslations('header');
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open]);

    return (
        <>
            <MenuButton
                type="button"
                aria-label={t('menu.open')}
                aria-expanded={open}
                aria-controls={PANEL_ID}
                onClick={() => setOpen(true)}
            >
                <LuMenu />
            </MenuButton>

            <Overlay $open={open} onClick={closeMenu} aria-hidden="true" />

            <Panel id={PANEL_ID} $open={open} aria-label={t('menu.title')}>
                <PanelHeader>
                    <PanelLogo>NOVA</PanelLogo>
                    <CloseButton type="button" aria-label={t('menu.close')} onClick={closeMenu}>
                        <LuX />
                    </CloseButton>
                </PanelHeader>

                <SearchBox onSearch={closeMenu} />

                <nav aria-label={t('nav.label')}>
                    <MenuList>
                        {navItems.map((item) => (
                            <li key={item.labelKey}>
                                <MenuLink href={item.href} onClick={closeMenu}>
                                    {t(`nav.${item.labelKey}`)}
                                </MenuLink>
                            </li>
                        ))}
                    </MenuList>
                </nav>
            </Panel>
        </>
    );
}