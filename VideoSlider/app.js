let navImg = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
navImg.addEventListener("click", () => {
  console.log("hello");

  navImg.classList.toggle("active");
  navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const content = document.querySelectorAll(".content");
var slider = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  content.forEach((cont) => {
    cont.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  content[manual].classList.add("active");
};

let currentSlide = 0;
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slider(i);
    currentSlide = i;
  });
});

// Automatically switch to the next slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % btns.length;
  slider(currentSlide);
}, 5000);

// Start the slider immediately
slider(currentSlide);