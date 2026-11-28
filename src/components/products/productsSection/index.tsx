import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import Container from '../../../shared/container';
import { SectionId } from '../../../types/enums/RoutPath';
import { toSearchParams } from '../../../utils/productQuery';
import type { ProductQuery } from '../../../types/productQuery';
import ProductGridSkeleton from '../productGridSkelet';
import ProductsContent from '../productsContent';
import ScrollToSection from '../scrollToSection';
import { Section, Title } from './style';

export default async function ProductsSection({ query }: { query: ProductQuery }) {
    const t = await getTranslations('productsSection');
    const trigger = new URLSearchParams(toSearchParams(query)).toString();

    return (
        <Section id={SectionId.Products} aria-labelledby="products-title">
            <Container>
                <ScrollToSection targetId={SectionId.Products} trigger={trigger} />
                <Title id="products-title">{t('title')}</Title>

                <Suspense fallback={<ProductGridSkeleton />}>
                    <ProductsContent query={query} />
                </Suspense>
            </Container>
        </Section>
    );
}