import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
	border: none;
	padding: 10px;
	background-color: var(--dark-grey);
	color: var(--light-grey);
	width: 200px;
	height: 50px;
	font-size: 16px;
	font-weight: 500;
`;

const SecondaryButton = styled(PrimaryButton)`
	background-color: var(--light-grey);
	color: var(--dark-grey);
`;

export default function Button({ onClick, title, type }) {
	let handleClick = onClick || null;
	const renderButton = () => {
		switch (type) {
			case "secondary":
				return (
					<SecondaryButton onClick={() => handleClick()}>
						{title}
					</SecondaryButton>
				);
			default:
				return (
					<PrimaryButton onClick={() => handleClick()}>{title}</PrimaryButton>
				);
		}
	};
	return <>{renderButton()}</>;
}
