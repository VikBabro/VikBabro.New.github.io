const winWidth = document.documentElement.clientWidth;
let sliderWidth;
switch (true) {
  case winWidth < 480:
    sliderWidth = 375;
    break;
    case winWidth < 768:
      sliderWidth = 480;
      break;
      case winWidth < 990:
        sliderWidth = 768
        break;
        case winWidth < 1200:
          sliderWidth=990
          break;
  default:
    sliderWidth = 1260
    break;
}
let input = document.querySelector(".submit");
input.addEventListener('click',(e)=>{
  e.preventDefault();
})

let bindAllTab = function () {
  let menuElements = document.querySelectorAll('.menu-item');
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].addEventListener('click', changeTab, false);
  }
};
let clearTab = function () {
  let menuElements = document.querySelectorAll('.menu-item');
  console.log(menuElements);
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.remove('active');
    let id = menuElements[i].getAttribute('id');
    document.querySelector(`[data-tab = ${id}]`).classList.remove('active');
  }
};
let changeTab = function (e) {
  clearTab();
    e.target.classList.add('active');
  let id = e.currentTarget.getAttribute('id');
  document.querySelector(`[data-tab = ${id}]`).classList.add('active');
};
let bindAll = function () {
  let menuElements = document.querySelectorAll('.b-nav-tab');
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].addEventListener('click', change, false);
  }
};

let clear = function () {
  let menuElements = document.querySelectorAll('.b-nav-tab');
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.remove('active');
    let id = menuElements[i].getAttribute('id');
    document.querySelector(`[data-tab = ${id}]`).classList.remove('active');
  }
};

let change = function (e) {
  clear();
    e.target.classList.add('active');
  let id = e.currentTarget.getAttribute('id');
  document.querySelector(`[data-tab = ${id}]`).classList.add('active');
};

bindAll();
bindAllTab();
let paginations = document.querySelector('.pagination');
let paginationPages = document.querySelectorAll('.pagination-page');
let slider = document.querySelector('.intro-slider');
paginations.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'pagination-page') {
    for (let i = 0; i < 3; i++) {
      paginationPages[i].classList.remove('active');
    }
    e.target.classList.add('active');
    slider.setAttribute(
      'style',
      `transform:translate3d(-${e.target.id * sliderWidth}px, 0px, 0px)`
    );
  }
});
let visitorPaginations = document.querySelector('.visitor-pagination');
let visitorPaginationPages = document.querySelectorAll('.visitor-pagination-page');
let visitorSlider = document.querySelector('.visitor-wrap');
visitorPaginations.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'visitor-pagination-page') {
    for (let i = 0; i < 3; i++) {
      visitorPaginationPages[i].classList.remove('active');
    }
    e.target.classList.add('active');
    visitorSlider.setAttribute(
      'style',
      `transform:translate3d(-${e.target.id * sliderWidth}px, 0px, 0px)`
    );
  }
});

let lickBlock = document.querySelector('.menu');
lickBlock.addEventListener('click', (e) => {
  if (e.target.tagName === 'path') {
    e.target.parentNode.parentNode.classList.toggle('active');

    if (e.target.parentNode.parentNode.classList.contains('active')) {
      e.target.parentNode.parentNode.children[2].textContent++;
    } else {
      e.target.parentNode.parentNode.children[2].textContent--;
    }
  }
});

const burgerMenu = document.querySelector(".burger-menu");
const burgerButton = document.querySelector(".burger-menu__button");
const burgerLink = document.querySelector(".list");
const burgerOverlay = document.querySelector(".burger-menu__overlay");
const body = document.querySelector("body");
burgerButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu();
});
burgerLink.addEventListener("click", (e) => {
  if(e.target.tagName === "A"){
    toggleMenu();
  }
  
});
burgerOverlay.addEventListener("click", (e) => {
  toggleMenu();
});
function toggleMenu() {
  burgerMenu.classList.toggle("burger-menu_active");
  if (burgerMenu.classList.contains("burger-menu_active")) {
    body.style = "overflow: hidden";
  } else body.style = "overflow: visibility";
}






