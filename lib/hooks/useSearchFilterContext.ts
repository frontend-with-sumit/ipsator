import { useContext } from "react";
import searchFilterCtx from "@/store/searchFilterCtx";

const useSearchFilterContext = () => {
	const context = useContext(searchFilterCtx);

	if (!context) {
		throw new Error("useSearchFilterContext must be used within a SFProvider");
	}

	return context;
};

export { useSearchFilterContext };
