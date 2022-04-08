let body = document.querySelector('.catalog-body')
let acc = document.getElementsByClassName('accordion');
let filter = document.querySelector('.filter');
let filterOpen = document.querySelector('.products-button--open');
let filterClose = document.querySelector('.filter-button__close');

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

filterOpen.addEventListener('click', () => {
	if(filter.classList.contains('opened')) {
		filter.classList.remove('opened')
		body.style.overflow = "visible";
	} else {
		filter.classList.add('opened')
		body.style.overflow = 'hidden';
	}
});

filterClose.addEventListener('click', () => {
	filter.classList.remove('opened');
	body.style.overflow = 'visible';
})

window.addEventListener('keydown', (evt) => {
	if (evt.keyCode === 27) {
	  if (filter.classList.contains('opened')) {
		evt.preventDefault();
		filter.classList.remove('opened');
	  }
	}
  });

const swiper = new Swiper('.swiper', {

	direction: 'horizontal',
	loop: false,

	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},

		1024: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	},
  
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  renderBullet: function (index, className) {
		  return '<span class="' + className + '">' + (index + 1) + '</span>';
	  },
	},
  

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

  });
  