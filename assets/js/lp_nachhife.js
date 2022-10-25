$(document).ready(function(){
    $(".owl-carousel.review_slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin:30,
        loop:true,
        autoHeight:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        smartSpeed: 800,
        responsive: {
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
    /* scroll animation */
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        offset: 140
    });
})