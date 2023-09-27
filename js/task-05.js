const inputForm = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputForm.addEventListener('input', submitAction);

function submitAction(){
        let notEmpty = inputForm.value;
        let empty = '';
       
        if (notEmpty !== ''){
            empty = notEmpty;
        } else{
            empty = 'Anonymous';
        }
    outputSpan.textContent = empty;        
}