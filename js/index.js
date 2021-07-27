// Latest Job Carousel
$(document).ready(function(){
  $("#banner-area .owl-carousel").owlCarousel({
    loop: 2,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  
  $("#main .owl-carousel").owlCarousel({
    dots: false,
    loop: 2,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
});