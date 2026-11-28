import { useTranslations } from 'next-intl';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { RoutePath } from '../../../types/enums/RoutPath';
import { toSearchParams } from '../../../utils/productQuery';
import type { ProductQuery } from '../../../types/productQuery';
import { Nav, PageLink, DisabledItem } from './style';

interface PaginationProps {
    query: ProductQuery;
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ query, currentPage, totalPages }: PaginationProps) {
    const t = useTranslations('productsSection.pagination');

    const getHref = (page: number) => ({
        pathname: RoutePath.Home,
        query: toSearchParams({ ...query, page }),
    });

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <Nav aria-label={t('label')}>
            {currentPage > 1 ? (
                <PageLink href={getHref(currentPage - 1)} scroll={false} aria-label={t('previous')}>
                    <LuChevronLeft />
                </PageLink>
            ) : (
                <DisabledItem aria-hidden="true">
                    <LuChevronLeft />
                </DisabledItem>
            )}

            {pages.map((page) => (
                <PageLink
                    key={page}
                    href={getHref(page)}
                    scroll={false}
                    $active={page === currentPage}
                    aria-current={page === currentPage ? 'page' : undefined}
                    aria-label={t('page', { page })}
                >
                    {page}
                </PageLink>
            ))}

            {currentPage < totalPages ? (
                <PageLink href={getHref(currentPage + 1)} scroll={false} aria-label={t('next')}>
                    <LuChevronRight />
                </PageLink>
            ) : (
                <DisabledItem aria-hidden="true">
                    <LuChevronRight />
                </DisabledItem>
            )}
        </Nav>
    );
}