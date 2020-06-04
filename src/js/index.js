import '../scss/main.scss';
import '../scss/style.scss'

/* place your code below */

console.log('HELLO 🚀')

const name = "Paweł";
const place = "Jaworzno";
const age = 34;

console.log(`Cześć :) Nazywam się ${name} i pochodzę z ${place}.`);

const description = document.querySelector(".main__description");

description.innerHTML =
  "Witaj na mojej stronie!!<br>Wiadomość dopisana przez JS :P";

function greet(name, age) {
  console.log(
    `Kolejne powitanie na mojej stronie!!
    Nazywam się ${name} i mam ${age} lata.
    Wiadomość jest dopisana przez JS :P`
  );
}

greet(name, age);

function createGreet(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

const greeting = `Kolejne powitanie na mojej stronie!! </br>
Nazywam się ${name} i mam ${age} lata. </br>
Wiadomość jest dopisana przez funkcję napisaną w JS :P`;

createGreet(".main__description--js", greeting);

const calculate = (myNumber) => {
  myNumber = myNumber + 3;
  console.log(myNumber);
  return `wynik ${myNumber * 7}`;
};

const newCalculate = (myNumber) => (myNumber + 3) * 7;

const myResult = calculate(2);

const myResult2 = newCalculate(2);

console.log(myResult);

console.log(myResult2);

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  comander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar);

console.log(deathStar.comander);

deathStar.fire("rebel ship");

const greetObject = {
  firstName: "Paweł",
  age: 34,
  nextGreet(querySelectorContent, content) {
    const element1 = document.querySelector(querySelectorContent);
    element1.innerHTML = content;
  },
};

const greetFunction = {
  nextGreet(querySelectorContent, content) {
    const element1 = document.querySelector(querySelectorContent);
    element1.innerHTML = content;
  },
  querySelectorContent: ".main__description--js1",
  greet: `Jeszcze kolejne powitanie na mojej stronie!! </br>
    Nazywam się ${greetObject.firstName} i mam ${greetObject.age} lata. </br>
    Wiadomość jest dopisana przez funkcję javaScript, a dane pobrane są z obiektu greetObject :P`,
};

greetFunction.nextGreet(
  greetFunction.querySelectorContent,
  greetFunction.greet
);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () =>{
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})