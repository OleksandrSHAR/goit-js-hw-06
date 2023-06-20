const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ulEl = document.querySelector('ul');
const ingrEl =ingredients.map((ingredient) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = ingredient;
  return  itemEl;
});
 ulEl.append(...ingrEl)
  
   