// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";  // css, navigation, pagination
import accordion from "./accordion.js";
import toggleMenu from "./toggleManu.js";

document.addEventListener("DOMContentLoaded", () => {

  // Accordion
  accordion();

  // Menu
  toggleMenu();

  // Initialize Swiper
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    effect: "slide",
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    // Autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });

  // const prevBtn = document.getElementById("prev");
  // const nextBtn = document.getElementById("next");

  // prevBtn.addEventListener("click", () => {
  //   swiper.slidePrev();
  // });

  // nextBtn.addEventListener("click", () => {
  //   swiper.slideNext();
  // });
});
