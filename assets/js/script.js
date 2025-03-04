// TESTIMONIAL
var swiper = new Swiper(".tesSwiper", {
    slidesPerView: 2,
    spaceBetween: 60,
    // margin:20,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      // when window width is >= 640px
      860: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      1010: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });