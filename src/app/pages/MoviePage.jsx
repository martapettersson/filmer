import React from "react";

export default function MoviePage({ moviePages }) {
	let movies = [];
	for (let page of moviePages) {
		page.results?.map((res) => movies.push(res));
	}
	console.log(movies);
	return <>movies</>;
}
