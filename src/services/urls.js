const API_KEY = "cb36dc3d6640b396ab9c82df16c15bf5";

export const fetchCatalogs = {
  fetchTrending: (page) =>
    `/trending/all/week?api_key=${API_KEY}&language=es-MX&total_results=20&total_pages=10&page=${page}`,
  fetchDetail: (movie_id) =>
    `/movie/${movie_id}?api_key=${API_KEY}&language=es-MX`,
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=es-MX`,
  fetchImage: (image) => `https://image.tmdb.org/t/p/w500${image}`,
};
