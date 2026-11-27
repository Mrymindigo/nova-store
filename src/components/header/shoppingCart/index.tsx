'use client';

import { useTranslations } from 'next-intl';
import { LuShoppingCart } from 'react-icons/lu';
import { RoutePath } from '../../../types/enums/RoutPath';
import { CartLink, Badge } from './style';

export default function ShoppingCart() {
  const t = useTranslations('header.cart');


  const count = 0;

  return (
    <CartLink href={RoutePath.Cart} aria-label={t('label', { count })}>
      <LuShoppingCart />
      {count > 0 && <Badge>{count}</Badge>}
    </CartLink>
  );
}