import { useTranslations } from 'next-intl';
import { PRODUCTS_PAGE_SIZE } from '../../../utils/constants/pagination';
import { Grid } from '../productGrid/style';
import { SkeletonCard } from './style';

export default function ProductGridSkeleton() {
    const t = useTranslations('productsSection');

    return (
        <Grid role="status" aria-busy="true" aria-label={t('loading')}>
            {Array.from({ length: PRODUCTS_PAGE_SIZE }, (_, index) => (
                <SkeletonCard key={index} />
            ))}
        </Grid>
    );
}