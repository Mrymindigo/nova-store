import { useFormatter, useTranslations } from 'next-intl';
import { LuStar } from 'react-icons/lu';
import AddToCartButton from '../addToCartButton';
import type { Product } from '../../../types/product';
import { getCategoryKey } from '../../../utils/categoryKeys';
import { Card, ImageBox, ProductImage, Body, Category, Title, Rating, Price, Footer, } from './style';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const t = useTranslations('product');
    const format = useFormatter();

    const price = format.number(product.price, { style: 'currency', currency: 'USD' });
    const rate = format.number(product.rating.rate, { maximumFractionDigits: 1 });
    const count = format.number(product.rating.count);


    const tCategories = useTranslations('categories');
    const categoryKey = getCategoryKey(product.category);
    const categoryLabel = categoryKey ? tCategories(categoryKey) : product.category;

    return (
        <Card>
            <ImageBox>
                <ProductImage
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                />
            </ImageBox>

            <Body>
                <Category>{categoryLabel}</Category>
                <Title>{product.title}</Title>

                <Rating
                    role="img"
                    aria-label={t('rating', {
                        rate: product.rating.rate,
                        count: product.rating.count,
                    })}
                >
                    <LuStar aria-hidden="true" />
                    <span>{rate}</span>
                    <span>({count})</span>
                </Rating>

                <Price>{price}</Price>

                <Footer>
                    <AddToCartButton product={product} />
                </Footer>
            </Body>
        </Card>
    );
}