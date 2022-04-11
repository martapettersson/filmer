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

export default function Button(props) {
	let onClick = props.onClick || null,
		title = props.title || "title",
		type = props.type || null;

	const renderButton = () => {
		if (!type)
			return <DefaultButton onClick={() => onClick()}>{title}</DefaultButton>;
		// else // add other types
	};
	return <>{renderButton()}</>;
}
