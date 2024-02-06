// header starts here=================================
const mobileNavbar = document.querySelector(".mobileBtn");
const headerNavbar = document.querySelector(".header");

const toggleNavbar = () => {
    headerNavbar.classList.toggle("active");
};

headerNavbar.addEventListener("click", () => toggleNavbar());