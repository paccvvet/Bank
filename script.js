'use strict';
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
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

// Вкладки

tabContainer.addEventListener('click', function (e) {
  const clickedButton = e.target.closest('.operations__tab');
  //Guard clause
  if (!clickedButton) return;
  // Активная вкладка
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedButton.classList.add('operations__tab--active');
  // Активный контент
  tabContents.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add('operations__content--active');
});
// Анимация потускнения
const navLinksFadeOut = function (e) {
  console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoText = linkOver.closest('.nav').querySelector('.nav__text');
    siblingLinks.forEach(sib => {
      if (sib !== linkOver) sib.style.opacity = this;
    });
    logo.style.opacity = this;
    logoText.style.opacity = this;
  }
};
// Работа с аргументами при помощи bind и this
nav.addEventListener('mouseover', navLinksFadeOut.bind(0.4));
nav.addEventListener('mouseout', navLinksFadeOut.bind(1));
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

//DOM traversing(Перемещение по DOM)

// const h1 = document.querySelector('h1');

// // Перемещение вниз (к потомку)
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'green';
// console.log(h1.lastElementChild);

// // Перемещение к родителю
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// const h2 = document.querySelector('h2');
// console.log(h2);
// console.log(h2.closest('.section'));

// // Перемещение в стороны

// console.log(h2.previousElementSibling);
// console.log(h2.nextElementSibling);
// console.log(h1.parentElement.children);
