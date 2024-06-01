document.addEventListener("DOMContentLoaded", function() {
  const reviewsList = document.querySelector('.reviews-list');
  const reviews = document.querySelectorAll('.review-item');
  const totalReviews = reviews.length;
  let currentIndex = 0;

  function showReview(index) {
      reviewsList.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextReview() {
      currentIndex = (currentIndex + 1) % totalReviews;
      showReview(currentIndex);
  }

  function previousReview() {
      currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
      showReview(currentIndex);
  }

  document.querySelector('.right-button').addEventListener('click', nextReview);
  document.querySelector('.left-button').addEventListener('click', previousReview);
});