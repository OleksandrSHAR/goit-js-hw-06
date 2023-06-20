const formLog = document.querySelector('.login-form')

 formLog.addEventListener('submit',handlerSubmit)

function handlerSubmit(event) {
  event.preventDefault();
  const {email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
     const user = {
      email: email.value,
      password:password.value
    }
    console.log(user);
  }

 
  formLog.reset();
} 