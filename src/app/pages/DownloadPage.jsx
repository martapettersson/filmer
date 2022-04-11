import React from "react";
import Button from "../components/Button";

export default function DownloadPage({ downloadMovies }) {
	return (
		<>
			<Button onClick={downloadMovies} title="Hämta filmer" />
		</>
	);
}
