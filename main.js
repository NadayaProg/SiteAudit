document.addEventListener('DOMContentLoaded', function () {
    const slideshow = document.querySelector('.slideshow');
    const checkList = slideshow.querySelector('.check__list');
    const buttons = slideshow.querySelectorAll('.button-radio');
    const numSlides = buttons.length;
    let currentSlide = 0;
  
      function updateButtons() {
          buttons.forEach((button, index) => {
              button.removeAttribute('aria-current');
              button.setAttribute('aria-label', `Показать ${index + 1} из ${numSlides}`);
          });
            buttons[currentSlide].setAttribute('aria-current', 'true');
            buttons[currentSlide].setAttribute('aria-label', `Текущий слайд ${currentSlide + 1} из ${numSlides}`);
      }
  
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        currentSlide = numSlides - 1;
      } else if (slideIndex >= numSlides) {
        currentSlide = 0;
      } else {
          currentSlide = slideIndex;
      }
        checkList.style.transform = `translateX(-${currentSlide * (100 / numSlides)}%)`;
        updateButtons()
      }
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
          });
      });
      updateButtons()
  });