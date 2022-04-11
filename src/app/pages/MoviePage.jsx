import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import OrderedList from "../components/OrderedList";

export default function MoviePage({ moviePages }) {
	const [showRes, setShowRes] = useState(false);
	let movies = [];
	for (let page of moviePages) {
		page.results?.map((res) => movies.push(res));
	}

	useEffect(() => {
		setTimeout(() => {
			setShowRes(true);
		}, 2500);
	});
	return <>{!showRes ? <Loader /> : <OrderedList movies={movies} />}</>;
}
