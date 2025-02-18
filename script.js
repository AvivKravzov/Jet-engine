document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");

    function checkSlides() {
        slides.forEach(slide => {
            let slidePosition = slide.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;

            if (slidePosition < screenPosition) {
                slide.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkSlides);
    checkSlides(); // להריץ את הפונקציה בעת טעינת הדף
});
