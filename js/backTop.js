'use strict';

(function() {

  var backTop = document.querySelector('.back-top');

  function mouseScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      backTop.classList.add('back-top--show');
    } else {
      backTop.classList.remove('back-top--show');
    }
  }

  function backToTop() {
    var scrolled = window.pageYOffset;

    if (scrolled > 0) {
      window.scrollBy(0, -60);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener('scroll', mouseScroll);
  backTop.addEventListener('click', backToTop);
})();
