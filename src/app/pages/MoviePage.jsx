import React, { useEffect, useState } from "react";
import OrderedList from "../components/OrderedList";

export default function MoviePage({ moviePages }) {
	let movies = [];
	for (let page of moviePages) {
		page.results?.map((res) => movies.push(res));
	}
	return <>{<OrderedList movies={movies} />}</>;
}
