import React from "react";
import { PiShoppingCart } from "react-icons/pi";

import Image from "next/image";
import { IProduct } from "./ProductsList";
import { formatNumber } from "@/lib/utils";

interface Props {
	product: IProduct;
}

const Product = ({ product }: Props) => {
	return (
		<div className="bg-white max-h-96 rounded-2xl overflow-hidden flex-column-between">
			<div className="h-48 relative">
				<Image src={product?.thumbnail} alt={product?.title} fill />
			</div>
			<div className="p-5 flex-column">
				<p className="small-text">{product?.brand}</p>
				<h3 className="h3-bold line-clamp-1">{product?.title}</h3>
				<p className="line-clamp-2 text-description">{product?.description}</p>

				<p className="flex-between align-self-end">
					<span className="text-bold">${formatNumber(product?.price)}</span>
					<PiShoppingCart size={20} className="cursor-pointer" />
				</p>
			</div>
		</div>
	);
};

export default Product;
