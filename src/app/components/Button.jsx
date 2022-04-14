import React from "react";
import styled from "styled-components";

const DefaultButton = styled.button`
	border: none;
	padding: 10px;
	background-color: var(--dark-grey);
	color: var(--light-grey);
	width: 200px;
	height: 50px;
	font-size: 16px;
	font-weight: 500;
`;

export default function Button({ onClick, title, type }) {
	let handleClick = onClick || null;
	const renderButton = () => {
		if (!type)
			return (
				<DefaultButton onClick={() => handleClick()}>{title}</DefaultButton>
			);
		// else // add other types
	};
	return <>{renderButton()}</>;
}
