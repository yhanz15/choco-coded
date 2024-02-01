$('.slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
      },
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    
  ],

});

var scroller = $('.slick-chocolate-is-loved').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    
  ],

});




