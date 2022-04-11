import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.p`
	font-size: ${(props) => {
		switch (props.size) {
			case 1:
				return "32px";
			case 2:
				return "24px";
			default:
				return "18px";
		}
	}};
`;

export default function Headline({ title, size }) {
	return <StyledHeadline size={size}>{title}</StyledHeadline>;
}
