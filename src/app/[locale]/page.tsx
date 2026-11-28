import CategorySwiper from "@/components/categories";
import HeroBanner from "@/components/hero";
import CategorySection from '../../components/categories';
import ProductsSection from '../../components/products/productsSection';
import { parseProductQuery } from '../../utils/productQuery';
import type { RawSearchParams } from '../../types/productQuery';

interface HomePageProps {
  searchParams: Promise<RawSearchParams>;
}


export default async function HomePage({ searchParams }: HomePageProps) {
  const query = parseProductQuery(await searchParams);

  return (
    <>
      <HeroBanner />
      <CategorySection />
      <ProductsSection query={query} />
    </>
  );
}