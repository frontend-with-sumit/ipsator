import React from "react";
import { BiSolidCategoryAlt, BiSort } from "react-icons/bi";
import Filter from "./Filter";

import { useSearchFilterContext } from "@/lib/hooks/useSearchFilterContext";

export interface Option {
	id: string;
	name: string;
}

const CATEGORIES_OPT: Option[] = [
	{ id: "smartphones", name: "Smartphones" },
	{ id: "laptops", name: "Laptops" },
	{ id: "fragrances", name: "Fragrances" },
	{ id: "skincare", name: "Skincare" },
	{ id: "groceries", name: "Groceries" },
	{ id: "home-decoration", name: "Home Decoration" },
	{ id: "furniture", name: "Furniture" },
	{ id: "tops", name: "Tops" },
	{ id: "womens-dresses", name: "Women's Dresses" },
	{ id: "womens-shoes", name: "Women's Shoes" },
	{ id: "mens-shirts", name: "Men's Shirts" },
	{ id: "mens-shoes", name: "Men's Shoes" },
	{ id: "mens-watches", name: "Men's Watches" },
	{ id: "womens-watches", name: "Women's Watches" },
	{ id: "womens-bags", name: "Women's Bags" },
	{ id: "womens-jewellery", name: "Women's Jewellery" },
	{ id: "sunglasses", name: "Sunglasses" },
	{ id: "automotive", name: "Automotive" },
	{ id: "motorcycle", name: "Motorcycle" },
	{ id: "lighting", name: "Lighting" },
];

const SORT_OPT: Option[] = [
	{ id: "price_low_high", name: "Price: Low to high" },
	{ id: "price_high_low", name: "Price: High to low" },
];

const Filters = () => {
	const { filters, onUpdateFilters } = useSearchFilterContext();

	return (
		<div className="flex-start gap-5 mt-6">
			<Filter
				items={SORT_OPT}
				name="Sort"
				value={filters?.sortBy}
				icon={<BiSort size={25} className="text-gray-500 font-light" />}
				onChange={(value: string) => onUpdateFilters("sortBy", value)}
			/>
			<Filter
				items={CATEGORIES_OPT}
				name="Category"
				value={filters?.category}
				icon={
					<BiSolidCategoryAlt size={25} className="text-gray-500 font-light" />
				}
				onChange={(value: string) => onUpdateFilters("category", value)}
			/>
		</div>
	);
};

export default Filters;
