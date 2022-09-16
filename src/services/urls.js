const API_KEY = "261d4171f0097e5f7430ec82c43f6e0e";

export const fetchCatalogs = {
  fetchTrending: (page) =>
    `/trending/all/week?api_key=${API_KEY}&language=es-MX&total_results=20&total_pages=10&page=${page}`,
  fetchDetail: (movie_id) =>
    `/movie/${movie_id}?api_key=${API_KEY}&language=es-MX`,
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=es-MX`,
  fetchImage: (image) => `https://image.tmdb.org/t/p/w500${image}`,
};
