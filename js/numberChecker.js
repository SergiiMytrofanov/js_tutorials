while (true) {
    const randomNumber = prompt('Write your random number')
   if (randomNumber === null){
    break
   }

let message;
if (randomNumber > 0) {
    message = 'You write Positive number'
} else if (randomNumber===0){
    message = 'Zero number'
} else {
    message = 'Negative number'
}

const paragraph = document.createElement('p');
paragraph.textContent = message;
document.body.appendChild(paragraph);
}


// const resultFromUseer = prompt('whrite your random number').toLowerCase()


// console.log(resultFromUseer);
// if (resultFromUseer === 'ECMAScript'.toLowerCase()){
//     alert('you`re right!')
// } else {
//     alert('You`re wrong.')
// }



// if (8 > 7) {
//     console.log('it`s true')
// } else if (15===16){
//     console.log('it`s equal')
// } else {
//     console.log('it`s  not equal')
// }




// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) {
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { 
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }

// console.log(checkPassword('jqueryismyjm'));

// task 18

// function makeTransaction(pricCePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     if ((pricCePerDroid*orderedQuantity)>customerCredits) {
//         message = "Insufficient funds!";
        
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-(pricCePerDroid*orderedQuantity)} credits left`
//     };
  
//     const messageTag = document.querySelector('.messageTag')
//     messageTag.textContent = message
//   }

//   makeTransaction(32, 5, 35800)

// console.log(makeTransaction(32, 5, 35800))


// let age = 29;
// age +=1;
// console.log(age);
// age +=3;
// console.log(age);











// function checkStorage(available, ordered) {
//     let message;
//     if (available<=ordered) {
//         message = 'Not enough goods in stock!';
//     } else {
//         message = 'Order is processed, our manager will contact you.'
//     }
  
//     const messageTag = document.querySelector('.messageTag');
// messageTag.textContent = message;
// }

// checkStorage(33,32);

  



