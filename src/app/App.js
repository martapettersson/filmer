import React, { useState } from "react";
import Headline from "./components/Headline";
import DownloadPage from "./pages/DownloadPage";
import MoviePage from "./pages/MoviePage";
import { getMovies } from "./utils/fetch";

export default function App() {
	const [moviePages, setMoviePages] = useState(null);
	const pages = [1, 2, 3, 4, 5]; // 20 movies/page, starting with page 1
	async function downloadMovies() {
		let data = [];
		for (let page of pages) {
			let res = await getMovies(page);
			data.push(res);
		}
		setMoviePages(data);
	}
	return (
		<div className="container">
			<Headline title="Toppfilmer just nu" size={1} />
			{moviePages ? (
				<MoviePage moviePages={moviePages} />
			) : (
				<DownloadPage downloadMovies={downloadMovies} />
			)}
		</div>
	);
}
