"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import ProductsList from "@/components/Products/ProductsList";
import Pagination from "@/components/Pagination/Pagination";
import Loading from "@/components/Loading";

export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	brand: string;
	category: string;
	thumbnail: string;
}

interface ProductData {
	products: IProduct[];
	total: number;
}

export default function Home() {
	const ITEMS_PER_PAGE = 10;
	const [data, setData] = useState({} as ProductData);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async (page: number = 0) => {
		try {
			const res = await axios.get(
				`https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${
					ITEMS_PER_PAGE * page
				}`
			);
			setData(res.data);
		} catch (err) {
			if (err instanceof Error) toast.error(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="flex flex-col min-h-screen gap-6 px-24">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<section>
						<p>Search</p>
						<ProductsList products={data?.products} />
					</section>

					<Pagination
						totalPages={Math.ceil(data.total / ITEMS_PER_PAGE)}
						getRequestedPage={(page: number) => fetchProducts(page)}
					/>
				</>
			)}
		</main>
	);
}
