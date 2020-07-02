jQuery(document).ready(function(){
    "use strict";

    // Mean Menu 
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanDisplay:"block"
    });
    
   // sticy navigation 
   $(window).scroll(function(){
        var top =$(window).scrollTop();

        if(top>=60){
            $(".main-navbar").addClass('secondary');
        }
        else if($(".main-navbar").hasClass('secondary')){
            $(".main-navbar").removeClass('secondary');
        }
    });

    // Owl Carousel 
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Magnific Popup 
    $('.popup').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
      });

    //   Carousel 
    $('.works-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


})