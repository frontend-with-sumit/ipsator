/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Message from "@/components/Message";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import ProductsList from "@/components/Products/ProductsList";
import Pagination from "@/components/Pagination/Pagination";

import useDebounce from "@/lib/hooks/useDebounce";

import SFProvider from "@/store/Providers/SFProvider";

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

export interface IFilter {
	sortBy: string;
	category: string;
}

export default function Home() {
	const ITEMS_PER_PAGE = 10;
	const BASE_URL = "https://dummyjson.com/products";

	const [data, setData] = useState({} as ProductData);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const [filters, setFilters] = useState<IFilter>({
		sortBy: "",
		category: "",
	});

	const debouncedSearchQuery = useDebounce(searchQuery, 500);

	useEffect(() => {
		fetchProducts();
	}, []);

	// Debounced search
	useEffect(() => {
		fetchProducts("search");
	}, [debouncedSearchQuery]);

	// Filter: Category
	useEffect(() => {
		filters.category && fetchProducts("category");
	}, [filters.category]);

	// Filter: SortBy
	useEffect(() => {
		if (filters.category || filters.sortBy) {
			const sortedProducts = sortProducts(data);
			setData(sortedProducts);
		}
	}, [filters]);

	const sortProducts = (data: ProductData) => {
		return {
			...data,
			products: data.products?.sort((a, b) =>
				filters.sortBy === "price_low_high"
					? a.price - b.price
					: b.price - a.price
			),
		};
	};

	const fetchProducts = async (type: string = "", page: number = 0) => {
		try {
			let url = BASE_URL;

			const queryParams = new URLSearchParams({
				limit: String(ITEMS_PER_PAGE),
				skip: String(ITEMS_PER_PAGE * page),
			});

			if (type === "category") {
				url = `${BASE_URL}/category/${filters?.category}`;
			} else if (type === "search") {
				queryParams.append("q", searchQuery);
				url = `${BASE_URL}/search/`;
			}

			url = `${url}?${queryParams.toString()}`;

			const res = await axios.get(url);

			const sortedProducts = filters.sortBy ? sortProducts(res.data) : res.data;
			setData(sortedProducts);
		} catch (err) {
			if (err instanceof Error) toast.error(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="flex-column min-h-screen gap-6 md:px-24 sm:px-10 py-5">
			<SFProvider
				searchQuery={searchQuery}
				filters={filters}
				onUpdateQuery={(e) => setSearchQuery(e.target.value)}
				onUpdateFilters={(name: string, value: string) => {
					setFilters((p) => ({ ...p, [name]: value }));
				}}
			>
				<SearchAndFilter />
			</SFProvider>

			{isLoading ? (
				<Message label="Loading products...." />
			) : (
				<>
					<ProductsList products={data?.products} />
					<Pagination
						totalPages={Math.ceil(data?.total / ITEMS_PER_PAGE)}
						getRequestedPage={(page: number) => {
							fetchProducts("", page);
							setFilters((p) => ({ ...p, sortBy: "" }));
						}}
					/>
				</>
			)}
		</main>
	);
}
