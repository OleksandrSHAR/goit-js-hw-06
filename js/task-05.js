const spanEl=document.querySelector('#name-output')
const imputEl=document.querySelector('#name-input')

 
imputEl.addEventListener("input", (event) => {
    if (imputEl.value) {
     return   spanEl.textContent = event.currentTarget.value;
        
    } return spanEl.textContent = "Anonimus";
   
}); 
  
  