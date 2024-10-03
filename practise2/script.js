const mobile_nav = document.querySelector(".mobile-view-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = ()=> {
    // alert("Please login for better interaction");
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener('click', ()=> toggleNavbar());