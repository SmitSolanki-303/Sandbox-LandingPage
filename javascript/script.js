import Swiper from "swiper/bundle";
import projectData from "./projectData.js";
import logoSlider from "./logoSlider.js";
import accordion from "./accordion.js";
import toggleMenu from "./toggleManu.js";

document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  console.log(projectData);

  // Logo Slider / Marquee
  logoSlider();

  // Accordion
  accordion();

  // Menu
  toggleMenu();

  // Initialize Swiper
  var swiper = new Swiper()

});
