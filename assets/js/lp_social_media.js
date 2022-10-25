$(document).ready(function() {
    $(".owl-carousel.review_slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin: 30,
        loop: true,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    /* scroll animation */
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        offset: 140
    });

     //auto typing
     if($().typed){
        $(".typed.banner_typed").typed({
            strings: ["ROI", "Mehrwert", "Nutzen","Erfolg","Wissenszuwachs"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 50,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 'infinite',
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    }
})