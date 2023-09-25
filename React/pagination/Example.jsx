import React, { useEffect, useState, useRef } from "react"

import Pagination from "../components/Pagination"

import PostService from "../API/PostService"

import { useFetching } from ""
import { useObserver } from ""
import { getPageCount } from ""

function Example() {
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const lastElement = useRef()

	const [fetchPosts, IsPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers["x-total-count"]
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, IsPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])

	const changePage = (page) => {
		setPage(page)
	}

	return (
		<Pagination page={page} changePage={changePage} totalPages={totalPages} />
	)
}

export default Example
