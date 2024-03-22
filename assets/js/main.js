(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn,.closeBtn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overly');   
  });

 // menu 
 $('.closeBtn').click( function (event){ 
    event.preventDefault()
    $(".humbergar").toggleClass('active');     
  }); 

  $('select').niceSelect();

  // owlCarousel
  $(".hero__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i><img src="assets/img/arrow-left.png" alt=""></i>',
      '<i><img src="assets/img/arrow-right.png" alt=""></i>'
    ],
    nav: true,
    dots: true,
    smartSpeed: 1000
  });

  // owlCarousel
  $(".movie__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i><img src="assets/img/arrow-left.png" alt=""></i>',
      '<i><img src="assets/img/arrow-right.png" alt=""></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i><img src="assets/img/arrow-left.png" alt=""></i>',
      '<i><img src="assets/img/arrow-right.png" alt=""></i>'
    ],
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
