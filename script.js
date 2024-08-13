const navbar = document.getElementsByTagName("nav")[0];
const toggleButton = document.querySelector(".navbar-toggler");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 0.1) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else if (window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});

toggleButton.addEventListener("click", function () {
  if (window.innerWidth <= 991 && window.scrollY === 0) {
    if (navbar.classList.contains("nav-color")) {
      navbar.classList.replace("nav-color", "bg-transparent");
    } else {
      navbar.classList.replace("bg-transparent", "nav-color");
    }
  }
});


let slidePosition = 0;
const slides = document.querySelectorAll(".review-card");
const totalSlides = slides.length;
const container = document.querySelector(".review-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

updateButtonState();

nextButton.addEventListener("click", function () {
  moveToNextSlide();
  console.log("Next button clicked");
});

prevButton.addEventListener("click", function () {
  moveToPrevSlide();
  console.log("Previous button clicked");
});

function moveToNextSlide() {
  if (slidePosition < totalSlides - 1) {
    slidePosition++;
    const slideWidth = slides[slidePosition].offsetWidth;
    container.scrollTo({
      left: slideWidth * slidePosition,
      behavior: "smooth",
    });
  }
  updateButtonState();
}

function moveToPrevSlide() {
  if (slidePosition > 0) {
    slidePosition--;
    const slideWidth = slides[slidePosition].offsetWidth;
    container.scrollTo({
      left: slideWidth * slidePosition,
      behavior: "smooth",
    });
  }
  updateButtonState();
}

function updateButtonState() {
  if (slidePosition === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (slidePosition === totalSlides - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
