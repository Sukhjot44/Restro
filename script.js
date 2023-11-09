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


// Get the Bootstrap carousel element
var carousel = document.getElementById('myCarousel');

// Listen for the 'slide.bs.carousel' event
carousel.addEventListener('slide.bs.carousel', function (event) {
  var from = event.from;
  var to = event.to;

  var direction = to > from ? 'left' : 'right';

  var activeSlide = document.querySelector('.carousel-item.active');
  var nextSlide = document.querySelector('.carousel-item[data-slide-to="' + to + '"]');

  if (direction === 'left') {
    // Slide in the active slide from the left
    activeSlide.style.transform = 'translateX(-100%)';
    nextSlide.style.transform = 'translateX(0)';
  } else if (direction === 'right') {
    // Slide in the active slide from the right
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

    // Return false to prevent the form from actually submitting
    return false;
  }





