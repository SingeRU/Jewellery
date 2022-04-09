let body = document.querySelector('.catalog-body')
let acc = document.getElementsByClassName('accordion');
let filter = document.querySelector('.filter');
let filterOpen = document.querySelector('.products-open');
let filterClose = document.querySelector('.filter-close');

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
			filter.classList.remove('opened')
			body.style.overflow = "visible";
		} else {
			filter.classList.add('opened')
			body.style.overflow = 'hidden';
		}
	});
}

if(filterClose != null) {
	filterClose.addEventListener('click', () => {
		filter.classList.remove('opened');
		body.style.overflow = 'visible';
	})
}
window.addEventListener('keydown', (evt) => {
	if (evt.keyCode === 27) {
	  if (filter.classList.contains('opened')) {
		evt.preventDefault();
		filter.classList.remove('opened');
	  }
	}
  });


  