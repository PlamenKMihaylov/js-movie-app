import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => toMovieDetailed(movie);

export const toMovieSimple = (movie) => `
<div class="movie-card" data-id="${movie.id}">
  <div class="movie-img-wrapper">
    <img src="${movie.poster}" alt="${movie.title}">
    <div class="movie-badge">${movie.year}</div>
  </div>

  <h3 class="movie-title">${movie.title}</h3>

  <div class="movie-buttons">
    <button class="movie-details" data-id="${movie.id}">View Details</button>
    <button class="favorite-toggle" data-id="${movie.id}">
      ${renderFavoriteStatus(movie.id)}
    </button>
  </div>
</div>
`;


const toMovieDetailed = (movie) => `
<div id="movie-detail">
  <h1 class="detail-title">${movie.title} <small>(${movie.year})</small></h1>

  <div class="detail-box">
    <div class="detail-poster">
      <img src="${movie.poster}" alt="${movie.title}">
    </div>

    <div class="detail-info">
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Starring:</strong> ${movie.stars.join(', ')}</p>

      <p class="detail-description">${movie.description}</p>

      <button type="button" class="favorite-toggle" data-id="${movie.id}">
        ${renderFavoriteStatus(movie.id)}
      </button>
    </div>
  </div>
</div>
`;

