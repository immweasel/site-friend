var slideIndex = 1;

function showSlides(n) {
  slideIndex += n;
  var i;
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('dot');

  for (i = 0; i < slides.length; i++) {
    console.log(slideIndex);
    var slide = document.getElementById(slides[i].id);
    const { left } = slide.getBoundingClientRect();

    slide.style.transform =
      slideIndex > slides.length || slideIndex < 1
        ? `translateX(${left}px)`
        : n < 0
        ? `translateX(calc(${left}px + 900px))`
        : `translateX(calc(${left}px - 900px))`;
  }
  slideIndex = slideIndex > slides.length ? slides.length : slideIndex < 1 ? 1 : slideIndex;

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndex - 1].className += ' active';
  console.log(slideIndex);
}
