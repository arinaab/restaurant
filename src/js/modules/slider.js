const slider = (slideSelector, prevSelector, nextSelector) => {
    const slides = document.querySelectorAll(slideSelector),
          prevBtn = document.querySelector(prevSelector),
          nextBtn = document.querySelector(nextSelector);

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => slide.style.display = 'none');
        
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    prevBtn.addEventListener('click', () => plusSlide(-1));
    nextBtn.addEventListener('click', () => plusSlide(+1));
};

export default slider;