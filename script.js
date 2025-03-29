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

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document
  .querySelector(".nav-links__mobile")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav-link-mobile")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
