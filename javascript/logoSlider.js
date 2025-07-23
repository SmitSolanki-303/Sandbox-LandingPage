function logoSlider() {
  const slider = document.querySelector("#slider");
  const sliderImages = document.querySelectorAll("#slider img");
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
}

export default logoSlider;