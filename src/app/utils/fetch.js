const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

export async function getMovies(page) {
	const url = baseURL + `&page=${page}`;
	try {
		let res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}
