import React from "react";
import ReactPaginate from "react-paginate";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "./Pagination.css";

interface Props {
	totalPages: number;
	getRequestedPage: (page: number) => void;
}

const Pagination = ({ totalPages, getRequestedPage }: Props) => {
	return (
		<section>
			<ReactPaginate
				breakLabel="..."
				pageCount={totalPages}
				containerClassName="pagination"
				pageClassName="page"
				disabledClassName="disabled"
				previousLinkClassName="previousLink"
				nextLinkClassName="nextLink"
				previousLabel={<BsArrowLeft />}
				nextLabel={<BsArrowRight />}
				onPageChange={({ selected }) => getRequestedPage(selected)}
			/>
		</section>
	);
};

export default Pagination;
