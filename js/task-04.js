const valueIncreaseBtn = document.querySelector('[data-action="increment"]');
const valueDecreaseBtn = document.querySelector('[data-action="decrement"]');

const counterDisplay = document.querySelector('#value');

valueIncreaseBtn.addEventListener('click', incrementProcessor);
valueDecreaseBtn.addEventListener('click', decrementProcessor);

let valueClick = 0;

function incrementProcessor(){
   valueClick +=1;
    counterDisplay.textContent = valueClick;

}

function decrementProcessor(){
    valueClick -=1;
    counterDisplay.textContent = valueClick;

}