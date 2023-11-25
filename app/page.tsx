import ProductsList from "@/components/Products/ProductsList";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen gap-6 px-24">
			<p>Filters</p>
			<div>
				<p>Search</p>
				<ProductsList />
			</div>
			<p>Pagination</p>
		</main>
	);
}
