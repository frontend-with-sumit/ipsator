import React from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchFilterContext } from "@/lib/hooks/useSearchFilterContext";

const Search = () => {
	const { searchQuery, onUpdateQuery } = useSearchFilterContext();

	return (
		<div className=" flex-start grow gap-5">
			<IoSearch size={30} className="text-gray-500" />
			<input
				className="border-b-2 border-gray-400 py-3 px-3 w-full text-xl active:border-b-2 focus-visible:border-b-2 focus-visible: outline-none"
				placeholder="Search products"
				name="search"
				onChange={onUpdateQuery}
				value={searchQuery}
			/>
		</div>
	);
};

export default Search;
