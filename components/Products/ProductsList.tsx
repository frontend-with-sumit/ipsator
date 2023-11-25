import React from "react";

import { IProduct } from "@/app/page";

import Product from "./Product";
import Message from "../Message";

interface Props {
	products: IProduct[];
}

const ProductsList = ({ products }: Props) => {
	return (
		<>
			{products.length ? (
				<div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
					{products?.map((product) => (
						<Product product={product} key={product?.id} />
					))}
				</div>
			) : (
				<Message label="No products available" />
			)}
		</>
	);
};

export default ProductsList;
