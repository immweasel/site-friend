const swiper = new Swiper(".swiper", {
  spaceBetween: 32,
  centeredSlides:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-right',
    prevEl: '.swiper-left',
  },

  breakpoints: {
    920: {
  slidesPerView: 1.98,

    },
    320: {
      slidesPerView: 1
    }
  }
});
