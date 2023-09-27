
const authorization = document.querySelector('.login-form');

authorization.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailInput = authorization.elements.email;
  const passwordInput = authorization.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Дундук, заповни всі поля!');
  } else { const formData = {
      email: emailInput.value,
      password: passwordInput.value

    };

    console.dir(formData);
    authorization.reset();
  }
});