/*==========================================================
                    SERVICE
==========================================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});
/*==========================================================
                    Work
==========================================================*/
$(function(){
   $("#work").magnificPopup({
       delegate: 'a',
       type: 'image',
       gallery: {
           enabled: true
       }
   }); 
});
/*==========================================================
                    TEAM
==========================================================*/
$(function(){
   $("#team-members").owlCarousel({
    items:3,
    autoplay:true,
    smartspeerd:700,
    loop:true,
    autoplayHoverPause: true,
    responsive : {
        0:{
           items: 1
        },
        480:{
            items:2
        },
        768: {
            items:3
        }
    }
   });
});
/*==========================================================
                    TEstinoials
==========================================================*/
$(function(){
   $("#customers-testimonials").owlCarousel({
    items:1,
    autoplay:true,
    smartspeerd:700,
    loop:true,
    autoplayHoverPause: true
   });
});
/*==========================================================
                    Counter
==========================================================*/
$(function(){
   $('.counter').counterUp({
                delay: 10,
                time: 2000
    }); 
});
/*==========================================================
                    CLIENTS
==========================================================*/
$(function(){
   $("#clients-list").owlCarousel({
    items:2,
    autoplay:true,
    smartspeerd:700,
    loop:true,
    autoplayHoverPause: true,
    responsive : {
        0:{
           items: 1
        },
        480:{
            items:3
        },
        768: {
            items:5
        },
        992: {
            items:6
        }
    }
   });
});
/*==========================================================
                    Navigation
==========================================================*/
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50) {
           //hide
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
           //show
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
//smooth scrolling
$(function(){
   $("a.smooth-scroll").click(function(event){
       event.preventDefault();
       //get/return id like #about, #work #team and etc
       var section = $(this).attr("href");
       /*console.log($(section).offset());*/
       $('html, body').animate({
           scrollTop: $(section).offset().top - 64
       },1250,"easeInOutExpo");
   }); 
});
//Close mobile menu on click
$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});
