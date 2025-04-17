//javascript for image carousel tutorial by Web Dev Simplified on youtube
//https://www.youtube.com/watch?v=9HcxHDS2w1s
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-wrapper");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-img");
    const prevBtn = carousel.querySelector(".prev-btn");
    const nextBtn = carousel.querySelector(".next-btn");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    // initialize first image
    showImage(currentIndex);
  });
});
