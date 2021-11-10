let header = document.querySelector("header");
let menu = document.querySelector("#menu-bars");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

// typed js
var typed = new Typed(".typing-text", {
  strings: ["front-end developer", "web designer", "web developer"],
  loop: true,
  typeSpeed: 150,
});

// tilt js

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});

// owlCarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1,
  });
});

// scroll To top button

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
