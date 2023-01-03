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
window.addEventListener("scroll", () => {
  const yOffset = window.scrollY;

  //If navbar at the top of the page Remove The Black BG.
  if (!yOffset) {
    navbar.classList.remove("bg-black", "shadow-lg");
  }

  //If we scroll Below the hero setion add Black BG.
  if (
    yOffset &&
    !navbar.classList.contains("bg-black", "shadow-lg") &&
    yOffset >= window.outerHeight
  ) {
    navbar.classList.add("bg-black", "shadow-lg");
  }
});
