$(document).ready(function () {
  $(window).on("scroll", function () {
    // Header Sticky JS
    if ($(this).scrollTop() > 10) {
      $(".navbar").addClass("small");
    } else {
      $(".navbar").removeClass("small");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".visible-menu").addClass("small");
    } else {
      $(".visible-menu").removeClass("small");
    }
  });
  // HAMBURGER
  $(".menuindividual").click(function () {
    $(".menucontents").removeClass("active");
  });
  $(".ham-icon").click(function () {
    $(".menucontents").toggleClass("active");
  });
  $(".cross-icon").click(function () {
    $(".menucontents").toggleClass("active");
  });
});
// ACCORDIAN section
var btns = document.querySelectorAll(".menuaccordians");
// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");
  // the acc-content
  var content = this.nextElementSibling;
  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}
// event
btns.forEach((el) => el.addEventListener("click", accordion));

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