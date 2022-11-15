const logoImg = document.getElementById("logo-img");
const logoTitle = document.getElementById("logo-title");

logoImg.addEventListener("mouseover", () => {
  logoTitle.style.visibility = "visible";
  logoTitle.style.transition = "ease-in-out";
  logoTitle.style.transitionDuration = "0.2s";
});

logoImg.addEventListener("mouseout", () => {
  logoTitle.style.visibility = "hidden";
});
