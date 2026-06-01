const texts = [
  "a Final-Year CSE Student",
  "an Aspiring Developer",
  "a Web Developer"
];

let count = 0;
let index = 0;

function type() {
  const current = texts[count];
  const text = current.slice(0, ++index);

  document.querySelector(".dynamic-text").textContent = text;

  if (text.length === current.length) {
    setTimeout(() => {
      index = 0;
      count = (count + 1) % texts.length;
      type();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}

type();

/* ONLY ONE SIMPLE ANIMATION */
const about = document.querySelector(".about-container");

window.addEventListener("scroll", () => {
  if (!about) return;

  if (about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add("show");
  }
});