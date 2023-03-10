//Handling Open/Close Mobile Navigation
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const mobileNav = document.getElementById("mobile-navigation");
const navbar = document.getElementById("navbar");
const serviceSection = document.getElementById("services");
const navLinks = document.querySelectorAll(".nav-item");

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-x-full");
});

openBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-x-full");
});

//Handle Closing Navbar When Clicking Outside Of Navmenu
document.addEventListener("click", (e) => {
  if (
    !mobileNav.contains(e.target) &&
    !openBtn.contains(e.target) &&
    !mobileNav.classList.contains("translate-x-full")
  ) {
    mobileNav.classList.toggle("translate-x-full");
  }
});

//Handle Closing Navbar When Clicking NavLinks.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.toggle("translate-x-full");
  });
});

//Lazy Loading Google Map Iframe
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const iframes = document.querySelectorAll(".lazy-iframe");
const iframeObserver = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      iframe.src = iframe.dataset.src;
      iframe.classList.remove("lazy-frame");
      iframeObserver.unobserve(iframe);
    }
  });
});

iframes.forEach((iframe) => {
  iframeObserver.observe(iframe);
});
