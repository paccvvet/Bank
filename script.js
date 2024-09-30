'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

///////////////////////////////////////
// Modal window
const openModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalWindow.length; i++)
  btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
//smooth page navigation
// document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
//   htmlElement.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// Делегирование событий
// 1. Добавляем event listener для ОБЩЕГО родителя
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Определить таргет элемент
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// Выбор элементов
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector('.header'));
// const sections = document.querySelectorAll('.section');
// console.log(sections);
// console.log(document.getElementById('section--1'));
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);
// console.log(document.getElementsByClassName('btn'));

// создание и вставка элементов
//.insertAjecentHTML()

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// //message.textContent = "Мы используем cookie.";
// message.innerHTML =
//   'Мы используем cookie. <button class="btn btn-close-cookie">Ok</button>';
// const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Удаление

// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Стили
// message.style.backgroundColor = '#076785';
// message.style.width = '120%';
// console.log(message.style.width);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
// console.log();
// console.log(getComputedStyle(message).height);

// // Атрибуты

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// logo.alt = 'Лого банка';

// logo.setAttribute('copyrigth', 'Рассвет');

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // data artibutes
// console.log(logo.dataset.versionNumber);

// // classes

// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('a');
// logo.classList.contains('c');

// btnScrollTo.addEventListener('click', function (e) {
//   // const section1Coords = section1.getBoundingClientRect();
//   // console.log(section1Coords);
//   // console.log(e.target.getBoundingClientRect());
//   // console.log('tekyshee prokryt: x, y', window.pageXOffset, window.pageYOffset);
//   // console.log(
//   //   'Ширина и высота viewport',
//   //   document.documentElement.clientWidth,
//   //   document.documentElement.clientHeight
//   // );

//   // window.scrollTo(
//   //   section1Coords.left + window.pageXOffset,
//   //   section1Coords.top + window.pageYOffset
//   // );
//   // window.scrollTo({
//   //   left: section1Coords.left + window.pageXOffset,
//   //   top: section1Coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   // Only for newBrosers
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

/////////////////////////////
// Виды и обработчики событий

//const h1 = document.querySelector('h1');
// const alertMouseEnterH1 = function (e) {
//   alert('addEventListener: Your now in h1 el ');
//   h1.removeEventListener('mouseenter', alertMouseEnterH1);
// };
// const alertMouseEnterH1 = function (e) {
//   alert('addEventListener: Your now in h1 el ');
// };
// setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 3000);
// h1.addEventListener('mouseenter', alertMouseEnterH1);
// h1.onclick = function (e) {
//   alert('Your now in h1 el num2 ');
// };

//////////////////////////////////////
// Event Propagation
// rgb(255, 255, 255)
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // Максимум не включается, минимум включается
// }

// const getRandomColor = () =>
//   `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
//     0,
//     255
//   )})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Link', e.target, e.currentTarget);
//   // Stop prapagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Links', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = getRandomColor();
//     console.log('Nav', e.target, e.currentTarget);
//   }
//   //true
// );

// Event Delegation
