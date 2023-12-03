// document.body.style.padding = ' 20px'
document.querySelector('.container').style.padding = '60px'

const nameElem = document.getElementById('name');
const age = document.getElementById('age');
const btn = document.querySelector('.js-btn');

const nameTxt = document.querySelector('.js-name-txt');
const ageNum = document.querySelector('.js-age');


btn.addEventListener('click', () => {
   const greetings = nameElem.value;
   const ageAllowed = age.value > 18
      ? `${greetings} you are allowed`
      : `${greetings} you are "NOT" allowed`;


      nameTxt.innerHTML = `Welcome! ${greetings}`;
      ageNum.innerHTML = ageAllowed;

})