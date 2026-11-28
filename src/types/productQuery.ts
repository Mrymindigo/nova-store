import type { ProductSort } from './enums/ProductSort';

export interface ProductQuery {
  q: string;
  category: string;
  sort: ProductSort;
  page: number;
}

//شکل خام در نکست
export type RawSearchParams = Record<string, string | string[] | undefined>;