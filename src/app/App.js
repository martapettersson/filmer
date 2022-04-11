import React, { useState } from "react";
import Headline from "./components/Headline";
import Loader from "./components/Loader";
import DownloadPage from "./pages/DownloadPage";
import MoviePage from "./pages/MoviePage";
import { getMovies } from "./utils/fetch";

export default function App() {
	const [showRes, setShowRes] = useState(false);
	const [downloadReq, setDowloadReq] = useState(false);
	const [moviePages, setMoviePages] = useState(null);
	const pages = [1, 2, 3, 4, 5]; // 20 movies/page, starting with page 1

	async function downloadMovies() {
		setDowloadReq(true);
		let data = [];
		for (let page of pages) {
			let res = await getMovies(page);
			data.push(res);
		}
		setMoviePages(data);
		setTimeout(() => {
			setShowRes(true);
		}, 2500);
	}

	return (
		<div className="container">
			<Headline title="Toppfilmer just nu" size={1} neon={true} />
			{!downloadReq ? (
				<DownloadPage downloadMovies={downloadMovies} />
			) : !showRes || !moviePages ? (
				<Loader />
			) : (
				<MoviePage moviePages={moviePages} />
			)}
		</div>
	);
}
