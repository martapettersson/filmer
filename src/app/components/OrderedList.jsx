import React from "react";
import styled from "styled-components";

const List = styled.ol`
	font-size: 16px;
	line-height: 20px;
`;

export default function OrderedList({ movies }) {
	return (
		<List>
			{movies.map((movie, i) => {
				return <li key={i}>{movie.title}</li>;
			})}
		</List>
	);
}
