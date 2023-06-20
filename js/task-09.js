function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const colorEl = document.querySelector('.color');
const changeEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const bgColor = () => {
  
   colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl.textContent;
  
}
changeEl.addEventListener('click', bgColor); 
 