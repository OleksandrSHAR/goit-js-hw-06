const imputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const textSize = () => {
    textEl.style.fontSize = `${imputEl.value}px`;
     
console.log(textEl)
}
imputEl.addEventListener('input',textSize)