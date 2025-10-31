// ===== Navbar Show/Hide on Scroll =====
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // If scrolling down → hide navbar
    if (currentScroll > lastScroll) {
        header.style.top = "-120px";
    } else {
        // If scrolling up → show navbar
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});

// Optional: Reset navbar position when resizing
window.addEventListener("resize", () => {
    header.style.top = "0";
});


// ===== Button: Scroll to Products =====
const exploreBtn = document.getElementById("exploreBtn");
const productsSection = document.getElementById("products");

if (exploreBtn && productsSection) {
    exploreBtn.addEventListener("click", () => {
        const offset = 50; // gap from top
        window.scrollTo({
            top: productsSection.offsetTop - offset,
            behavior: "smooth"
        });
    });
}


// ===== Scroll to Top Button =====
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
