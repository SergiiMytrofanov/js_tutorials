 const input = document.querySelector('#validation-input')
 
 input.addEventListener("blur", () => {
    const settedLength = input.getAttribute('data-length');
    const typedLength = input.value.length;

    if(typedLength === Number(settedLength)){
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
  });