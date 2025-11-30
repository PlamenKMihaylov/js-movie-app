import { HOME } from './common/constants.js';
import { categories } from './data/movies-data.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderCategory, renderMovieDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    if (event.target.classList.contains('categories')) {
      console.log(categories)
      renderCategory(+event.target.getAttribute('data-id'));
    }

    // make whole card clickable
    const card = event.target.closest('.category-card');
    if (card) {
      const btn = card.querySelector('.categories');
      if (btn) btn.click();
    }

    // show movie events
    const detailBtn = event.target.closest('.movie-details');
    if(detailBtn) {
      renderMovieDetails(Number(detailBtn.dataset.id));
      return;
    }

    const movieCard = event.target.closest('.movie-card');
    if(movieCard && !event.target.closest('button')) {
      renderMovieDetails(Number(movieCard.dataset.id));
      return; 
    }

    // toggle favorite event
    const favBtn = event.target.closest('.favorite-toggle');
    if (favBtn) {
      toggleFavoriteStatus(+favBtn.dataset.id);
      return;
    }


  });

  // search events
  q('input#search').addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);

});

const searchInput = q('input#search');
if (searchInput) {
  searchInput.addEventListener('input', event => {
    renderSearchItems(event.target.value);
  });
}