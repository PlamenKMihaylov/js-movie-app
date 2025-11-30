import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchMovies } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { toHomeView } from '../views/home-view.js';
import { q } from './helpers.js';

export const renderSearchItems = (searchTerm) => {
  const term = searchTerm.trim();

  if (!term) {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
    return;
  }

  const movies = loadSearchMovies(term);
  q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, term);
};