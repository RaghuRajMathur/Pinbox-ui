// navbar.js

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle nav visibility on hamburger click
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  });
  