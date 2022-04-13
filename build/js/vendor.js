new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1023: {
      slidesPerView: 4,
      spaceBetween: 25
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
