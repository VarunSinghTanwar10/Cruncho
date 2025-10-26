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
        top: productsSection.offsetTop - offset,
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

const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideNav.classList.toggle('open');
    overlay.classList.toggle('show');
});

// Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sideNav.classList.remove('open');
    overlay.classList.remove('show');
});




