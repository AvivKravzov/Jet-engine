document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // יצירת כפתורי ניווט
    let nextButton = document.createElement("button");
    let prevButton = document.createElement("button");

    nextButton.innerText = "➡️";
    prevButton.innerText = "⬅️";

    nextButton.classList.add("nav-button");
    prevButton.classList.add("nav-button");

    document.body.appendChild(nextButton);
    document.body.appendChild(prevButton);

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentSlide);
});
