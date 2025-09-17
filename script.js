let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.style.top = "-100px";
        navbar.style.opacity = "0";
    } else {
        navbar.style.top = "0";
        navbar.style.opacity = "1";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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