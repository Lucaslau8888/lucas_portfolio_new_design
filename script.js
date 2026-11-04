
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

// Mobile navigation
if (menuButton && mobileNav) {

  menuButton.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  mobileNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");

    });

  });

}


// Scroll reveal animation
const revealItems = document.querySelectorAll(
  ".about-layout, .skills-layout, .project, .testimonial-card, .resume-block"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12
  });

  revealItems.forEach(item => observer.observe(item));

} else {

  revealItems.forEach(item => item.classList.add("show"));

}
