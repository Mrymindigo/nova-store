import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { dictionaries } from './dictionary';
import { routing } from './utils/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: dictionaries[locale],
  };
});