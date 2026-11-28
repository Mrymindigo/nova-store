import ProductCard from '../productCard';
import type { Product } from '../../../types/product';
import { Grid } from './style';

export default function ProductGrid({ products }: { products: Product[] }) {
    return (
        <Grid>
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </Grid>
    );
}