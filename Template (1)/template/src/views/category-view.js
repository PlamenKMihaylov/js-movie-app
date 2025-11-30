export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="categories-row">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => {
  const posters = {
    'Action': 'posters/action_aliens.jpg',
    'Comedy': 'posters/comedy_bad_teacher.jpg',
    'Fantasy': 'posters/fantasy_chronicals_of_narnia.jpg',
    'Sci-Fi': 'posters/sci_fi_blade_runner.jpg'
  };

  return `
<div class="category-card" data-id="${category.id}">
  <img src="${posters[category.name]}" class="category-poster">

  <h2>${category.name}</h2>
  <p>${category.moviesCount} movies</p>

  <button class="categories" data-id="${category.id}">
    View category
  </button>
</div>
`;
};

