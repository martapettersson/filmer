import React from "react";
import styled from "styled-components";

const LoadSpinner = styled.div`
	border: 16px solid var(--white);
	border-radius: 50%;
	border-top: 16px solid var(--dark-grey);
	width: 120px;
	height: 120px;
	-webkit-animation: spin 2s linear infinite; /* Safari */
	animation: spin 2s linear infinite;

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default function Loader() {
	return <LoadSpinner />;
}
