import React, { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";

interface Props {
	query: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchAndFilter = ({ query, onChange }: Props) => {
	return (
		<section className="max-w-screen bg-white rounded-2xl my-6 mb-10 py-8 px-10 flex-between">
			<div className=" flex-start grow">
				<IoSearch size={30} className="text-gray-500" />
				<input
					className="border-b-2 border-gray-400 py-3 w-full text-xl active:border-b-2 focus-visible:border-b-2 focus-visible: outline-none"
					placeholder="Search products"
					name="search"
					onChange={onChange}
					value={query}
				/>
			</div>
			<hr className="bg-gray-100 rotate-90 w-20 h-[0.1] relative" />
			<p>
				<GiSettingsKnobs
					size={40}
					className="cursor-pointer hover:text-primary-400"
				/>
			</p>
		</section>
	);
};

export default SearchAndFilter;
