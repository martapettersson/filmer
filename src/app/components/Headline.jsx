import React from "react";
import styled from "styled-components";

const Headline1 = styled.h1`
	text-align: center;
	font-family: ${(props) => (props.neon ? "Neonderthaw, cursive" : "inherit")};
	font-size: 58px;
	color: var(--white);
	text-shadow: ${(props) =>
		props.neon
			? "0 0 7px #e97272, 0 0 10px #e97272,0 0 21px #e97272, 0 0 42px #e50b0b, 0 0 82px #e50b0b, 0 0 92px #e50b0b,0 0 102px #e50b0b, 0 0 151px #e50b0b;"
			: null};
`;

export default function Headline({ title, type, neon }) {
	const renderHeadline = () => {
		switch (type) {
			case 1:
				return <Headline1 neon={neon}>{title}</Headline1>;
			// add more type cases here
			default:
				break;
		}
	};
	return <>{renderHeadline()}</>;
}
