// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";  // css, navigation, pagination
import projectData from "./projectData.js";
import logoSlider from "./logoSlider.js";
import accordion from "./accordion.js";
import toggleMenu from "./toggleManu.js";

document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  console.log(projectData);

  // Logo Slider / MarqueeWellcome@123

  logoSlider();

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
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
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
    }
  });

  
});
