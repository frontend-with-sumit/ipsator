import React, { ChangeEvent } from "react";
import searchFilterCtx, { SearchFilterContextData } from "../searchFilterCtx";
import { IFilter } from "@/app/page";

interface Props {
	children: React.ReactNode;
	searchQuery: string;
	filters: IFilter;
	onUpdateQuery: (event: ChangeEvent<HTMLInputElement>) => void;
	onUpdateFilters: (name: string, value: string) => void;
}

const SFProvider = ({
	children,
	searchQuery,
	filters,
	onUpdateQuery,
	onUpdateFilters,
}: Props) => {
	const initialContextData: SearchFilterContextData = {
		searchQuery,
		filters,
		onUpdateQuery,
		onUpdateFilters,
	};

	return (
		<searchFilterCtx.Provider value={initialContextData}>
			{children}
		</searchFilterCtx.Provider>
	);
};

export default SFProvider;
