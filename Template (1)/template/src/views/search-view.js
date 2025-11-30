import { toMovieSimple } from './movie-views.js';

export const toSearchView = (movies, searchTerm) => `
<div id="movies-search">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n') || '<p>No results found.</p>'}
  </div>
</div>
`;

