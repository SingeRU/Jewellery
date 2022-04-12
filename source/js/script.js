let body = document.querySelector('.page-body')
let acc = document.getElementsByClassName('accordion');
let filter = document.querySelector('.filter');
let filterOpen = document.querySelector('.products-open');
let filterClose = document.querySelector('.filter-close');
let login = document.querySelector('.login')
let loginButton = document.querySelector('.options-login');
let loginClose = document.querySelector('.login-close');
let loginForm = document.querySelector('.login-form');
let loginEmail = document.querySelector('.email');
let loginPassword = document.querySelector('.password');

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
    body.classList.remove('page-body--fixed');
  });
}

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  login.classList.remove('login--closed');
  login.classList.add('login--opened');
  body.style.overflow = 'hidden';
});

loginClose.addEventListener('click', () => {
  loginClose.classList.remove('login--opened');
  login.classList.add('login--closed');
  body.style.overflow = 'auto';
});

loginForm.addEventListener('submit', () => {
  localStorage.setItem('email', loginEmail.value);
  localStorage.setItem('password', loginPassword.value);
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (filter.classList.contains('opened')) {
    evt.preventDefault();
    filter.classList.remove('opened');
    }
  }
});
