import React from "react";

import Product from "./Product";
import Loading from "../Loading";
import { IProduct } from "@/app/page";

interface Props {
	products: IProduct[];
}

const ProductsList = ({ products }: Props) => {
	return (
		<>
			<div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
				{products?.map((product) => (
					<Product product={product} key={product?.id} />
				))}
			</div>
		</>
	);
};

export default ProductsList;
