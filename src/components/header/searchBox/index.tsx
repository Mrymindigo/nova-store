'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import SearchInput from '../../../shared/searchInput';
import { useRouter } from '../../../utils/navigation';
import { RoutePath } from '../../../types/enums/RoutPath';
import { parseProductQuery, toSearchParams } from '../../../utils/productQuery';
import { Form } from './style';

interface SearchBoxProps {
  onSearch?: () => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const t = useTranslations('header.search');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(() => searchParams.get('q') ?? '');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // فیلتر و مرتب‌سازی فعلی بماند، فقط متن جستجو و صفحه عوض شود
    const current = parseProductQuery(Object.fromEntries(searchParams.entries()));
    router.push(
      {
        pathname: RoutePath.Home,
        query: toSearchParams({ ...current, q: value.trim(), page: 1 }),
      },
      { scroll: false },
    );

    onSearch?.();
  };

  return (
    <Form role="search" onSubmit={handleSubmit}>
      <SearchInput
        value={value}
        onChange={setValue}
        placeholder={t('placeholder')}
        ariaLabel={t('label')}
      />
    </Form>
  );
}