'use strict';
const getRandomNumber = function () {
  return Math.ceil(Math.random() * 100);
};
const randomNumber = getRandomNumber();
console.log(randomNumber);

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-input-number');
const clue = document.querySelector('.js-clue');
const attemptsText = document.querySelector('.js-attempts');
let attempts = 0;

function handleBtnClick(ev) {
  ev.preventDefault(); //Cuando el tipo de boton/input es submit
  /* console.log('Has pulsado el botón prueba'); */
  console.log('random', randomNumber);
  console.log('input', parseInt(inputNumber.value));

  attemptsText.innerHTML = `Número de intentos: ${attempts++}`;

  if (inputNumber.value === '') {
    clue.innerHTML = 'No has introducido ningun número';
    console.log(clue.innerHTML);
  } else if (
    parseInt(inputNumber.value) <= 0 ||
    parseInt(inputNumber.value) >= 101
  ) {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
    console.log(clue.innerHTML);
  } else if (parseInt(inputNumber.value) < randomNumber) {
    clue.innerHTML = 'Demasiado bajo';
    console.log(clue.innerHTML);
  } else if (parseInt(inputNumber.value) > randomNumber) {
    clue.innerHTML = 'Demasiado alto';
    console.log(clue.innerHTML);
  } else if (parseInt(inputNumber.value) === randomNumber) {
    clue.innerHTML = '¡¡¡Has ganado campeona!!!';
    console.log(clue.innerHTML);
  }
}

button.addEventListener('click', handleBtnClick);

/*   */
