"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Product from "./Product";
import Loading from "../Loading";

export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	brand: string;
	category: string;
	thumbnail: string;
}

const ProductsList = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const res = await axios.get("https://dummyjson.com/products");
			setProducts(res.data.products);
		} catch (err) {
			if (err instanceof Error) toast.error(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{isLoading && <Loading />}
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
				{products.map((product) => (
					<Product product={product} key={product?.id} />
				))}
			</div>
		</>
	);
};

export default ProductsList;
