'use strict';

var slider = document.querySelector('.slider');
var sliderCards = slider.querySelectorAll('.slider__card');
var firstSlide = slider.querySelector('.slider__card');
var arrowLeft = slider.querySelector('.slider__arrow--left');
var arrowRight = slider.querySelector('.slider__arrow--right');
var sliderDots = slider.querySelectorAll('.slider__dot');

var slideIndex = 1;

function showSlides(n) {
  var i;

  if (n > sliderCards.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderCards.length;
  }

  for (i = 0; i < sliderCards.length; i++) {
    sliderCards[i].style.opacity = "0";
  }

  for (i = 0; i < sliderDots.length; i++) {
    sliderDots[i].className = sliderDots[i].className.replace(" slider__dot--active", "");
  }

  sliderCards[slideIndex - 1].style.opacity = "1";
  sliderDots[slideIndex - 1].className += " slider__dot--active";
}

function plusSlide() {
  showSlides(slideIndex += 1);
}
setInterval(plusSlide, 3000);

function minusSlide() {
  showSlides(slideIndex -= 1);
}

arrowLeft.addEventListener('click', minusSlide);
arrowRight.addEventListener('click', plusSlide);

showSlides(slideIndex);
