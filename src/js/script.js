$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: true,
    speed: 1300,
    // adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="/src/icons/left.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="/src/icons/right.png" /></button>',
    responsive: [
        {
      breakpoint: 768,
      settings: {
        
        dots: true,
        arrows: false
      }
    }
    ],
  });
});
