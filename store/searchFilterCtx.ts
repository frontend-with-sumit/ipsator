import { ChangeEvent, createContext } from "react";

export interface SearchFilterContextData {
	searchQuery: string;
	filters: {
		sortBy: string;
		category: string;
	};
	onUpdateQuery: (e: ChangeEvent<HTMLInputElement>) => void;
	onUpdateFilters: (name: string, value: string) => void;
}

const searchFilterCtx = createContext<SearchFilterContextData | undefined>(
	undefined
);

export default searchFilterCtx;
