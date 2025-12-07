document.addEventListener("DOMContentLoaded", () => {
  // Configuration
  const config = {
    transitionDuration: 500,
  };

  // State
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  // Navigation Logic
  function showSlide(index) {
    // Bounds check
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;

    currentSlideIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  // Controls (Keyboard)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "Space") {
      showSlide(currentSlideIndex + 1);
    } else if (e.key === "ArrowLeft") {
      showSlide(currentSlideIndex - 1);
    }
  });

  // Initialize
  console.log(`Presentation initialized. Total slides: ${slides.length}`);
  showSlide(0);
});
