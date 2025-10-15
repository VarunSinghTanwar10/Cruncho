// Navbar show hide on scroll
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.innerWidth < 768) {
        header.style.top = "0";
        return;
    }

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        header.style.top = "-120px";
    } else {
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        header.style.top = "0";
    }
});

// Button on click scroll to products 

const exploreBtn = document.getElementById("exploreBtn");
const productsSection = document.getElementById("products");

exploreBtn.addEventListener("click", () => {
    const offset = 50; // gap from top
    window.scrollTo({
        top: productsSection.offsetTop - offset, // scroll with gap
        behavior: "smooth"
    });
});



// Scroll to top button

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll back to top smoothly
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Hamburger Menu Toggle
const hamMenu = document.getElementById('ham-menu');
const navbarMenu = document.querySelector('.navbar');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
