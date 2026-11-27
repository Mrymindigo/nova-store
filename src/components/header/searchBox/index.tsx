'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import SearchInput from '../../../shared/searchInput';

export default function SearchBox() {
  const t = useTranslations('header.search');
  const [query, setQuery] = useState('');

  return (
    <SearchInput
      value={query}
      onChange={setQuery}
      placeholder={t('placeholder')}
      ariaLabel={t('label')}
    />
  );
}