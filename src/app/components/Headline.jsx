import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.p`
	font-family: "Neonderthaw", cursive;
	font-size: ${(props) => {
		switch (props.size) {
			case 1:
				return "42px";
			case 2:
				return "24px";
			default:
				return "18px";
		}
	}};
	color: var(--white);
	text-shadow: ${(props) =>
		props.neon
			? "0 0 7px #e97272, 0 0 10px #e97272,0 0 21px #e97272, 0 0 42px #e50b0b, 0 0 82px #e50b0b, 0 0 92px #e50b0b,0 0 102px #e50b0b, 0 0 151px #e50b0b;"
			: null};
`;

export default function Headline({ title, size, neon }) {
	return (
		<StyledHeadline neon={neon} size={size}>
			{title}
		</StyledHeadline>
	);
}
