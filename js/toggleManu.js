  function toggleMenu() {
    const body = document.querySelector("body");
  const openMenu = document.querySelector("#hamburgerMenu");
  const closeMenu = document.querySelector("#closeMenu");
  const sidebar = document.querySelector("#sidebar");
  const overlay = document.querySelector("#overlay");

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
  }

  export default toggleMenu;