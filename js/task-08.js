const formLog = document.querySelector('.login-form')

 formLog.addEventListener('submit',handlerSubmit)

function handlerSubmit(event) {
  event.preventDefault();
  const {email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  } else {
      console.log(`Email: ${email.value}, Password: ${password.value}`);
  }

 
  formLog.reset();
} 