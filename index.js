const stars = document.querySelectorAll(".star");
const ratingDisplay = document.querySelector(".rating-display");

let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", function () {
    rating = stars.indexOf(this) + 1;
    updateRatingDisplay();
  });
});

function updateRatingDisplay() {
  ratingDisplay.innerHTML = `You rated this movie ${rating} stars.`;

  // Remove active class from all stars
  stars.forEach((star) => {
    star.classList.remove("active");
  });

  // Add active class to selected stars
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("active");
  }
}
