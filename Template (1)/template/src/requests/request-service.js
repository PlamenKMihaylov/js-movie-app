import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  const categories = getCategories();

  return categories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  const movies = getMoviesGeneralInfo(categoryId);

  return movies;
};

export const loadSingleMovie = (id) => {
  const singleMovie = getMovieById(id);

  return singleMovie;
};

export const loadSearchMovies = (searchTerm = '') => {
  const searchOutput = searchMovies(searchTerm);

  return searchOutput;
};
