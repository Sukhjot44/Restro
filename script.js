/* navigation  */
$(document).ready(function() {
  const $nav = $(".navbar");

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 50) {
      $nav.addClass("navbar-scrolled");
    } else {
      $nav.removeClass("navbar-scrolled");
    }
  });
});


var carousel = document.getElementById('myCarousel');

carousel.addEventListener('slide.bs.carousel', function (event) {
  var from = event.from;
  var to = event.to;

  var direction = to > from ? 'left' : 'right';

  var activeSlide = document.querySelector('.carousel-item.active');
  var nextSlide = document.querySelector('.carousel-item[data-slide-to="' + to + '"]');

  if (direction === 'left') {
    activeSlide.style.transform = 'translateX(-100%)';
    nextSlide.style.transform = 'translateX(0)';
  } else if (direction === 'right') {
    activeSlide.style.transform = 'translateX(100%)';
    nextSlide.style.transform = 'translateX(0)';
  }
});


function scrollToDiv(targetId) {
  var targetElement = document.getElementById(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}



  function validateContactForm() {
    var form = document.querySelector('form');
    if (form.checkValidity()) {
      // form.submit();
    }var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phone-error');
    var phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.style.display = 'block';
      return false; // Prevent form submission
    } else {
      phoneError.style.display = 'none';
    }
    document.getElementById('confirmation-message').style.display = 'block';

    return false;
  }




