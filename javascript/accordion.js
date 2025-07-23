  function accordion() {
    const accordions = document.querySelectorAll("#accordion");
    const body = document.querySelector("body");

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
  }

  export default accordion;