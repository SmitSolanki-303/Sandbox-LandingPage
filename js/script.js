// import Swiper from "swiper/bundle";
// import { Navigation,Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});
