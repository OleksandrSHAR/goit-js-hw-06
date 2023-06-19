const counterValue = document.querySelector("#value");
 

 
const decrement = document.querySelector('[data-action="decrement"]');
 const increment = document.querySelector('[data-action="increment"]');
decrement.addEventListener('click', () =>{
counterValue.textContent -= 1; 
});

 
 

increment.addEventListener('click', () =>{
counterValue.textContent  = Number(counterValue.textContent)+ 1; 
});
