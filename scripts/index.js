//Handling Open/Close Mobile Navigation
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const mobileNav = document.getElementById("mobile-navigation");
const navbar = document.getElementById("navbar");
const serviceSection = document.getElementById("services");

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-x-full");
});

openBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-x-full");
});

//Handle Navbar Background Color Change While Scrolling.
window.addEventListener(
  "scroll",
  () => {
    const yOffset = window.scrollY;

    //If navbar at the top of the page Remove The Black BG.
    if (!yOffset) {
      navbar.classList.remove("bg-zinc-800", "shadow-lg");
    }

    //If we scroll Below the hero setion add Black BG.
    if (
      yOffset &&
      !navbar.classList.contains("bg-zinc-800", "shadow-lg") &&
      yOffset >= window.outerHeight
    ) {
      navbar.classList.add("bg-zinc-800", "shadow-lg");
    }
  },
  { passive: true }
);

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
