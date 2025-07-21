document.addEventListener("DOMContentLoaded", () => {
    // Selectors
    const openMenu = document.querySelector("#hamburgerMenu");
    const closeMenu = document.querySelector("#closeMenu");
    const sidebar = document.querySelector("#sidebar");

    // Event Listeners
    openMenu.addEventListener("click", toogleMenu);
    closeMenu.addEventListener("click", toogleMenu);

    // functions
    function toogleMenu() {
        console.log(this);
        sidebar.classList.toggle("translate-x-0");
    }
    
});