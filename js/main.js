const burger = document.querySelector(".burger"),
      burgerBtn = document.querySelector(".header__burger__btn"),
      burgergWrapper = document.querySelector(".header__burger__wrapper");

burgerBtn.addEventListener('click', () => {
   burger.classList.toggle('active');
   burgergWrapper.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 60,
  centeredSlides: true,
   breakpoints: {
      1200: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      1400: {
         slidesPerView: 1.8,
      },
      1920: {
         slidesPerView: 2.5,
      },
   },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});