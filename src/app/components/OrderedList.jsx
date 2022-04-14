import React from "react";
import styled from "styled-components";

const List = styled.ol`
	font-size: 16px;
	line-height: 20px;
`;
const NeonBorder = styled.div`
	padding: 30px 60px 30px 60px;
	box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
		0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
		inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
	border-radius: 1.5rem;
`;

export default function OrderedList({ movies }) {
	return (
		<NeonBorder>
			<List>
				{movies.map((movie) => {
					return <li key={movie.id}>{movie.title}</li>;
				})}
			</List>
		</NeonBorder>
	);
}
