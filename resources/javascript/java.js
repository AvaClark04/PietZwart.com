///// search button
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

////// carousel

const carousel = document.querySelector(".carousel");
const carouselContainer = carousel.querySelector(".carousel-container");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

let scrollAmount = 0;
const step = carouselContainer.clientWidth;

function scrollCarousel() {
  carouselContainer.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

prevButton.addEventListener("click", () => {
  if (scrollAmount === 0) {
    scrollAmount = carouselContainer.scrollWidth - step;
  } else {
    scrollAmount -= step;
  }
  scrollCarousel();
});

nextButton.addEventListener("click", () => {
  if (scrollAmount + step >= carouselContainer.scrollWidth) {
    scrollAmount = 0;
  } else {
    scrollAmount += step;
  }
  scrollCarousel();
});
