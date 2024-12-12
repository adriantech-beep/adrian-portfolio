const nav = document.querySelector(".nav");
const navModalMobile = document.querySelector(".nav-modal__mobile");
const faXmark = document.querySelector(".fa-xmark");

nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-bars-staggered"))
    navModalMobile.classList.remove("modal-hidden");
});

faXmark.addEventListener("click", () =>
  navModalMobile.classList.add("modal-hidden")
);
