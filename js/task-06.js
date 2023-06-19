const imputEl = document.querySelector('#validation-input');

const dataLength = imputEl.getAttribute('data-length');
const checkLength = (event) => {
    const CorectValue = event.currentTarget.value;
    if (Number(dataLength)=== Number(CorectValue.length)) {
        imputEl.classList.add('valid')
     
    } else {
         imputEl.classList.add('invalid')
       
    }
    

}
imputEl.addEventListener("blur", checkLength)

