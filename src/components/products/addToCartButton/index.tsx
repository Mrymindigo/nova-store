'use client';

import { useTranslations } from 'next-intl';
import { LuShoppingCart } from 'react-icons/lu';
import type { Product } from '../../../types/product';
import { Button } from './style';

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const t = useTranslations('product');

    const handleClick = () => {
        //Zustand
        console.log('add to cart:', product.id);
    };

    return (
        <Button type="button" onClick={handleClick}>
            <LuShoppingCart aria-hidden="true" />
            {t('addToCart')}
        </Button>
    );
}