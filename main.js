$(document).ready(function(){
    $('.owl-carousel-basic').owlCarousel({
      margin:0,
      loop:true,      
      autoplay:true,  
      item: 3,
      autoplayTimeout:3000,     
      autoplayHoverPause:true, 
      nav:false,       
      responsive:{  
        0:{
          items:1
        },
        600:{
          items:3,
          nav:false,
          margin: 0
        },
        1000:{
          items:3
        }
      }
    });

    $('.owl-carousel-testimonoal').owlCarousel({
        margin:0,
        loop:true,      
        autoplay:true,  
        item: 1,
        autoplayTimeout:3000,     
        autoplayHoverPause:true, 
        nav:false,       
        responsive:{  
          0:{
            items:1
          },
          600:{
            items:1,
            nav:false,
            margin: 50
          },
          1000:{
            items:1
          }
        }
      })
    
  
  });

  $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#mainNav').addClass('sticky');
        } else {
            $('#mainNav').removeClass('sticky');
        }
    });
});

