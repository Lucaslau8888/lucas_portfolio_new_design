const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton?.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

mobileNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

// Keep the page calm: only a small reveal as sections enter the screen.
const revealItems = document.querySelectorAll(".about-layout, .skills-layout, .project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));
