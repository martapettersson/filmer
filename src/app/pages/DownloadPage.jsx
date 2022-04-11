import React from "react";

export default function DownloadPage({ downloadMovies }) {
	return (
		<>
			<button onClick={() => downloadMovies()}>hämta filmer</button>
		</>
	);
}
