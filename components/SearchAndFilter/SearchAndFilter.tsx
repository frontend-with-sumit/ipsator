"use client";
import React, { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";

import Filters from "./Filters";
import Search from "./Search";

const SearchAndFilter = () => {
	const [showFilters, setShowFilters] = useState<boolean>(false);

	return (
		<section className="max-w-screen bg-white rounded-2xl md:py-8 md:px-10 max-sm:py-5 max-sm:px-8 flex-column gap-0 overflow-hidden">
			<div className="flex-start">
				<Search />
				<hr className="bg-gray-100 rotate-90 w-20 h-[0.1px] relative" />
				<MdOutlineSettings
					size={35}
					className="cursor-pointer hover:text-primary-400"
					onClick={() => setShowFilters((p) => !p)}
				/>
			</div>
			<div className="overflow-auto hide-scrollbar touch-pan-x">
				{showFilters && <Filters />}
			</div>
		</section>
	);
};

export default SearchAndFilter;
