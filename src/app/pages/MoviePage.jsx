import React from "react";
import OrderedList from "../components/OrderedList";
import styled from "styled-components";

const Error = styled.div`
	font-size: 18px;
	line-height: 20px;
`;

export default function MoviePage({ moviePages }) {
	let movies = [];
	for (let page of moviePages) {
		page.results?.map((res) => movies.push(res));
	}
	return (
		<>
			{movies.length > 0 ? (
				<OrderedList movies={movies} />
			) : (
				<Error>something went wrong...</Error>
			)}
		</>
	);
}
