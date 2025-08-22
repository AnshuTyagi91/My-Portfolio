// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    navbar.style.background = "#0b1a2a";
    navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-active");
  });
});

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle i");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    themeToggle.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

// Contact form (demo only)
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out! I’ll get back to you soon.");
});
