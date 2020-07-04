'use strict';
const getRandomNumber = function (max) {
  return Math.ceil(Math.random() * max);
};
const randomNumber = getRandomNumber(100);
//Número a adivinar:
console.log('Mi número aleatorio es:', randomNumber);

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-input-number');
const clue = document.querySelector('.js-clue');
const attemptsText = document.querySelector('.js-attempts');

//Funcion manejadora que se ejecuta al hacer click en el botón
function handleBtnClick(ev) {
  ev.preventDefault(); //Cuando el tipo de boton/input es submit, para evitar el envío al servidor
  updateClue();
  updateCounter();
}

//Funcion que nos genera la pista en funcion del valor introducido en el input
function updateClue() {
  let inputNumValue = inputNumber.value;
  inputNumValue = parseInt(inputNumValue);
  if (inputNumValue >= 1 && inputNumValue <= 100) {
    if (inputNumValue < randomNumber) {
      clue.innerHTML = '&#127847 Demasiado bajo. &#127846';
      clue.style.color = 'blue';
    } else if (inputNumValue > randomNumber) {
      clue.innerHTML = '🔥 Demasiado alto. 🔥';
      clue.style.color = 'orange';
    } else if (inputNumValue === randomNumber) {
      clue.innerHTML = '&#128170 ¡¡¡Has ganado campeona!!! &#128079 🎉 💖 🎉';
      clue.style.color = 'green';
    }
  } else if (inputNumber.value === '') {
    clue.innerHTML = '⛔ No has introducido ningun número ⛔';
    clue.style.color = 'red';
  } else {
    clue.innerHTML =
      '📣 El número debe estar entre 1 y 100. Prueba otra vez 😉';
    clue.style.color = 'red';
  }
}

//Funcion que genera los números de intentos
let attempts = 0;

function updateCounter() {
  // attempts = attempts + 1;
  // attempts += 1;
  attempts++;
  attemptsText.innerHTML = attempts;
}

//Listener
button.addEventListener('click', handleBtnClick);

const resetButton = document.querySelector('.js-reset-button');

function handleupdateAll(ev) {
  ev.preventDefault();
  inputNumber.value = '';
  getRandomNumber(100);
  attempts = 0;
  attemptsText.innerHTML = attempts;
  clue.innerHTML = 'escribe el número y dale a Prueba';
  clue.style.color = '';
}

resetButton.addEventListener('click', handleupdateAll);

