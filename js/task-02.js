const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const liBlock = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement('li');

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem;
}
);
list.append(...liBlock);

