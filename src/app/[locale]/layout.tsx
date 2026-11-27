import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import StyledRegistry from '../../shared/styledRegistry';
import { ThemeProvider } from '../../context/ThemeContext';
import { getDirection } from '../../utils/getDirection';
import { parseThemeMode } from '../../utils/parseThemeMode';
import { routing } from '../../utils/routing';
import { THEME_COOKIE } from '../../utils/constants/theme';
import Header from '../../components/header';
import Footer from '@/components/footer';

const vazirmatn = Vazirmatn({
    variable: '--font-vazirmatn',
    subsets: ['arabic', 'latin'],
    display: 'swap',
});

interface LocaleLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({
    params,
}: Pick<LocaleLayoutProps, 'params'>): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();

    const cookieStore = await cookies();
    const initialMode = parseThemeMode(cookieStore.get(THEME_COOKIE)?.value);

    return (
        <html lang={locale} dir={getDirection(locale)} className={vazirmatn.variable}>
            <body>
                <StyledRegistry>
                    <NextIntlClientProvider>
                        <ThemeProvider initialMode={initialMode}>
                            <Header />
                            <main>{children}</main>
                            <Footer />
                        </ThemeProvider>
                    </NextIntlClientProvider>
                </StyledRegistry>
            </body>
        </html>
    );
}