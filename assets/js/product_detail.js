$(document).ready(function(){
    var prod_lgSlider=$(".prod_lgSlider").owlCarousel({
        items:1,
        nav:false,
        dots:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            576:{
                dots:false,
                nav:true
            }
        }
    });

    var prod_smSlider=$(".owl-carousel.prod_smSlider").owlCarousel({
        items:3,
        nav:false,
        dots:false,
        margin:12,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            420:{
                items:4
            },
            576:{
                items:4,
                nav:true
            },
            768:{
                nav:true,
                items:6,
                margin:18
            }
        }
       
    });

    prod_lgSlider.on('changed.owl.carousel', function(event) {
        $(".prod_smSliderItem").removeClass("active_item");
        $(".prod_smSliderItem")[event.item.index].classList.add("active_item");
    });


    // floating header
    var calc=$(document).scrollTop();
    if(calc>300){
        $(".header_sec").addClass("remove_shadow");
        $("#floating_actRow").addClass("show_floatingBar")
    }else{
        $(".header_sec").removeClass("remove_shadow");
        $("#floating_actRow").removeClass("show_floatingBar")
    }

    $(window).scroll(function(){
        calc= $(document).scrollTop();
        if(calc>300){
            $(".header_sec").addClass("remove_shadow");
            $("#floating_actRow").addClass("show_floatingBar")
        }else{
            $(".header_sec").removeClass("remove_shadow");
            $("#floating_actRow").removeClass("show_floatingBar")
        }
    })

})