$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 80) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  /* slide-up */

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  /* Toggle Menu/ NavBar */

  $(".topnav").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".topnav i").toggleClass("active");
  });
  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".topnav i").toggleClass("active");
  });

  /* OWL CAROUSEL */
  
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 1200,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});