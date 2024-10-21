import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import ProductsGrid from "../products/ProductsGrid";
import SectionTitle from "../global/SectionTitle";

async function FeaturedProducts() {
	const products = await fetchFeaturedProducts();
	if (products.length === 0) return <EmptyList />;

	return (
		<section className="pt-24">
			<SectionTitle text="featured products" />
			<ProductsGrid products={products} />
		</section>
	);
}

export default FeaturedProducts;
