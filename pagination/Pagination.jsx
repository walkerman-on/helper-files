import React from "react"
import { getPagesArray } from ""

const Pagination = ({ totalPages, page, changePage }) => {
	let pagesArray = getPagesArray(totalPages)

	return (
		<div className="pageNumber">
			{pagesArray.map((number) => (
				<span
					onClick={() => changePage(number)}
					key={number}
					className={page === number ? "page page__current" : "page"}
				>
					{number}
				</span>
			))}
		</div>
	)
}

export default Pagination
