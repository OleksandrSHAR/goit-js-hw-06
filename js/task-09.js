function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getColor = getRandomHexColor();
const colorEl = document.querySelector('.color');
const changeEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
 
const bgColor = (event) => {
  bodyEl.style.backgroundColor = getColor;
  colorEl.textContent=bodyEl.style.backgroundColor
 
}
changeEl.addEventListener('click', bgColor); 
 