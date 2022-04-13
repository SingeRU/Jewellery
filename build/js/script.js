let body = document.querySelector('.page-body');
let headerContainer = document.querySelector('.header')
let acc = document.getElementsByClassName('accordion');
let filter = document.querySelector('.filter');
let filterOpen = document.querySelector('.products-open');
let filterClose = document.querySelector('.filter-close');
let login = document.querySelector('.login')
let loginButtons = document.querySelectorAll('.options-login');
let loginClose = document.querySelector('.login-close');
let loginForm = document.querySelector('.login-form');
let loginEmail = document.querySelector('.email');
let loginPassword = document.querySelector('.password');
let logo = document.querySelector('.header-top__logo__use');
let burgerButton = document.querySelector('.header-burger');
let burgerButtonSvg = document.querySelector('.header-burger__use')
let optionsImage =document.querySelector('.options-image')
let optionsImageSvg = document.querySelector('.options-image__use');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

menu.classList.remove('menu--nojs')

burgerButton.addEventListener('click', () => {
  if(menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    headerContainer.style.backgroundColor = "#A87B62";
    burgerButton.style.backgroundColor = "#A87B62";
    optionsImage.style.backgroundColor = "#A87B62";
    logo.style.fill = "#ffffff";
    burgerButtonSvg.style.stroke = "#ffffff";
    optionsImageSvg.style.stroke = "#ffffff";
    body.style.overflow = "hidden";
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    headerContainer.style.backgroundColor = "#ffffff";
    burgerButton.style.backgroundColor = "#ffffff";
    optionsImage.style.backgroundColor = "#ffffff";
    logo.style.fill = "#A87B62";
    burgerButtonSvg.style.stroke = "#1D1613";
    optionsImageSvg.style.stroke = "#1D1613";
    body.style.overflow = "auto";
  }
});

if(filterOpen != null) {
  filterOpen.addEventListener('click', () => {
    if(filter.classList.contains('opened')) {
      filter.classList.remove('opened');
      body.style.overflow = 'auto';
    } else {
      filter.classList.add('opened');
      body.style.overflow = 'hidden';
    }
  });
}

if(filterClose != null) {
  filterClose.addEventListener('click', () => {
    filter.classList.remove('opened');
    body.style.overflow = 'auto';
  });
}

loginButtons.forEach((loginButton) => {
  loginButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    login.classList.remove('login--closed');
    login.classList.add('login--opened');
    body.style.overflow = 'hidden';
  });
})

loginClose.addEventListener('click', () => {
  loginClose.classList.remove('login--opened');
  login.classList.add('login--closed');
  body.style.overflow = 'auto';
});

loginForm.addEventListener('submit', () => {
  localStorage.setItem('email', loginEmail.value);
  localStorage.setItem('password', loginPassword.value);
});

overlay.addEventListener('click', () => {
  loginClose.classList.remove('login--opened');
  login.classList.add('login--closed');
  body.style.overflow = 'auto';
})

window.addEventListener('keydown', (evt) => {
  if(evt.keyCode === '27') {
    if(login.classList.contains('login--opened')) {
      evt.preventDefault();
      login.classList.remove('login--opened');
      login.classList.add('login--closed');
      body.style.overflow = 'auto';
    }
  }
});
