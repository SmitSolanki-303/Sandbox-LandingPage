document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const openMenu = document.querySelector("#hamburgerMenu");
  const closeMenu = document.querySelector("#closeMenu");
  const sidebar = document.querySelector("#sidebar");
  const overlay = document.querySelector("#overlay");
  const body = document.querySelector("body");
  const slider = document.querySelector("#slider");
  const sliderImages = document.querySelectorAll("#slider img");
  const accordions = document.querySelectorAll("#accordion");

  // Logo Slider
  let id = 0;
  setInterval(() => {
    id++;
    slider.style.transform = `translateX(-${id * 10}%)`;
    if (id >= sliderImages.length - 1) {
      id = 0;
    }
  }, 3000);

  // Duplicate
  // const cloneSlider = slider.cloneNode(true);
  // slider.appendChild(cloneSlider);
  // console.log(cloneSlider);

  // Clone the images and append into the slider
  sliderImages.forEach((image) => {
    const cloneImage = image.cloneNode(true);
    slider.appendChild(cloneImage);
  });

  accordions.forEach((accordion) => {
    const accordionHead = accordion.querySelector("#accordionHead");
    const accordionBody = accordion.querySelector("#accordionBody");

    accordionHead.addEventListener("click", () => {
        // isVisible = ! (true) - our accordion contain the "h-0"
        const isVisible = !accordionBody.classList.contains("h-0");
        // print false
        console.log(isVisible);

        // Closing all accordion's body by adding the "h-0"
      accordions.forEach((acc, index) => {
        const body = acc.querySelector("#accordionBody");
        body.classList.add("h-0");
      });
      
      // opening the accordion by removing the "h-0"
      if (!isVisible) {
        accordionBody.classList.remove("h-0");
      }
    });
  });


  // Event Listeners
  openMenu.addEventListener("click", openSidebar);
  closeMenu.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // functions
  function openSidebar() {
    sidebar.classList.add("translate-x-0"); // add translate-x-0 - slide in our menu
    overlay.classList.toggle("hidden"); // overlay will toggle as block
    body.classList.add("overflow-y-hidden"); // body will not scroll
  }

  function closeSidebar() {
    sidebar.classList.remove("translate-x-0"); // remove translate-x-0 - slide out our menu
    overlay.classList.toggle("hidden"); // overlay will toggle as hidden(display:none)
    body.classList.remove("overflow-y-hidden"); // body can scroll
  }
});
