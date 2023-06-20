
const imputEl = document.querySelector('#validation-input');
 const dataLength = imputEl.getAttribute('data-length');
const checkLength = (event) => {
    const CorectValue = event.currentTarget.value; 
    if (Number(dataLength)=== Number(CorectValue.length)) {
        imputEl.classList.add('valid') 
        imputEl.classList.remove('invalid');
     
    } else {
        imputEl.classList.add('invalid')
imputEl.classList.remove('valid')    }
 
}
imputEl.addEventListener("blur", checkLength)
console.log(dataLength)