$(document).ready(function() {
    /*_______________ start home page _______________*/

    /* header section  */
    $(".menu_toggleBtn").click(function() {
        $(".header_navLinkArea").addClass("active")
    });
    $(".menu_clsBtn,.nav_backDrop").click(function() {
        $(".header_navLinkArea").removeClass("active")
    });

    /* readmore option  */
    $(".readmore_btn").click(function() {
        $(".readMore_container").addClass("active");
    });


    $(".owl-carousel.tcat_slider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: ['<img src="assets/icon/left_arrow.svg">', '<img src="assets/icon/right_arrow.svg">'],
        responsive: {
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 5,
                stagePadding: 20
            },
            1800: {
                items: 5,
                stagePadding: 35,
            }
        }
    });
    $(".owl-carousel.topTopics_postSlider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: ['<img src="assets/icon/left_arrow.svg">', '<img src="assets/icon/right_arrow.svg">'],
        responsive: {
            576: {
                items: 2
            },
            768: {
                items: 2
            }
        }
    });


    /* scroll animation */
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        offset: 140
    });

    /* light box */
    const lightbox = GLightbox({
        touchNavigation: true
    });

    /*_______________ end home page _______________*/

    /*_______________ start prices page _______________*/
    $(".pkg_tabBtn").click(function() {
        $(".pkg_tabBtn.active").removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass("pkg_tabBtn_yearly")) {
            $(this).parents(".pkg_container").addClass("show_yearly")
        } else {
            $(this).parents(".pkg_container").removeClass("show_yearly")
        }
    });

    $(".bPln_secTitle").click(function() {
        $(".bPln_secImgBox").toggleClass("show_screens");
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    /*_______________ end prices page _______________*/


    /*_______________ start profile details page _______________*/
    $(".main_navColTglBtn").click(function() {
        $(".main_navCol").addClass("active");
    });
    $(".main_navColBackdrop").click(function() {
        $(".main_navCol").removeClass("active");
    });
    $(".txt_countBoxInp").on("input", function() {
        var cLen = $(this).val().length;
        $(this).parents(".txt_countBox").find(".txt_currentNum").text(cLen);
    });

    /*_______________ end profile details page _______________*/

    /*_______________ start profile reviews page _______________*/
    $("#submitted_reviewTglBtn").click(function() {
        if ($(this).is(":checked")) {
            $(this).parents(".submitted_reviewCol").find(".review_box").fadeIn(100)
        } else {
            $(this).parents(".submitted_reviewCol").find(".review_box").fadeOut(100)
        }
    })
    /*_______________ end profile reviews page _______________*/

    /*_______________ start Contact us page _______________*/
    /*.... phone number validation ....*/
    var input = document.querySelector("#phone"),
        errorMsg = document.querySelector("#error_msg"),
        validMsg = document.querySelector("#valid_msg");
    // here, the index maps to the error code returned from getValidationError - see readme
    var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
    // initialise plugin
    // var iti = window.intlTelInput(input, {
    //     initialCountry: "de",
    //     onlyCountries: ["at", "de", "ch"],
    //     separateDialCode: true,
    //     nationalMode: true,
    //     allowDropdown: true
    // });
    var iti;
    if(typeof window.intlTelInput === "function"){
        iti = window.intlTelInput(input, {
            initialCountry: "de",
            onlyCountries: ["at", "de", "ch"],
            separateDialCode: true,
            nationalMode: true,
            allowDropdown: true
        });
    }

    var reset = function() {
        input.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        validMsg.classList.add("hide");
    };

    // on blur: validate
    if(input !==null){
        input.addEventListener('blur', function() {
            reset();
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    validMsg.classList.remove("hide");
                } else {
                    input.classList.add("error");
                    var errorCode = iti.getValidationError();
                    errorMsg.innerHTML = errorMap[errorCode];
                    errorMsg.classList.remove("hide");
                }
            }
        });
        // on keyup / change flag: reset
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);
    }





    /*.... required inputs validation ....*/
    $(".ck_valid_email").on("input", function() {
        ck_validEmail($(this));
    });
    $(".form_inpRq").on("input",function(){
        ck_validInp($(this));
    });
    $(".ck_agrInp").on("input",function(){
        ck_agrInp($(this));
    });
    function ck_validInp(elm){
        if($(elm).val()==null || $(elm).val().trim()==""){
            $(elm).parents(".form_inpRow").removeClass("valid_inp");
            $(elm).parents(".form_inpRow").addClass("invalid_inp");
            return false;
        }else{
            $(elm).parents(".form_inpRow").removeClass("invalid_inp");
            $(elm).parents(".form_inpRow").addClass("valid_inp");
            return true;
        }
    }
    function ck_validEmail(elm){
        if (isEmail($(elm).val().trim())) {
            $(elm).parents(".form_inpRow").removeClass("invalid_inp");
            $(elm).parents(".form_inpRow").addClass("valid_inp");
            return true;
        } else {
            $(elm).parents(".form_inpRow").removeClass("valid_inp");
            $(elm).parents(".form_inpRow").addClass("invalid_inp");
            return false;
        }
    }
    function ck_agrInp(elm){
        if($(elm).is(":checked")) {
            $(elm).parents(".form_inpRow").removeClass("invalid_inp");
            $(elm).parents(".form_inpRow").addClass("valid_inp");
            return true;
        } else {
            $(elm).parents(".form_inpRow").removeClass("valid_inp");
            $(elm).parents(".form_inpRow").addClass("invalid_inp");
            return false;
        }
    }
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $(".form_submitBtn").click(function() {
        var email= $(".inp_email").val().trim();
        var fname= $(".inp_fname").val().trim();
        var lname= $(".inp_lname").val().trim();
        var subject= $(".inp_subject").val().trim();
        var description= $(".inp_desc").val().trim();
        var condition= $(".inp_condition").val().trim();
        var phone_number= iti.getNumber();

        var allRqd;
        var rqd_email=ck_validEmail($(".ck_valid_email"));
        allRqd = rqd_email;
       
        $(".form_inpRq").each(function() {
            var rgd_inp=ck_validInp($(this));
            allRqd = allRqd && rgd_inp;
            
        });
        var rgd_agrInp = ck_agrInp($(".ck_agrInp"));
        allRqd = allRqd && rgd_agrInp;

        if(rgd_agrInp==true){
            var form = $("#contact_form");
            var actionUrl = form.attr('action');

            $.ajax({
                type: "POST",
                url: actionUrl,
                data: {
                    email: email,
                    fname: fname,
                    lname: lname,
                    subject: subject,
                    description: description,
                    condition:condition,
                    phone_number:phone_number
                },
                success: function(data) {
                    if (data.success == true) {
                    } else {
                    }
                }
            });
        }
    });
    /*_______________ end Contact us page _______________*/

    /*_______________ start blog page _______________*/
    $(".owl-carousel.tt_slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin:16,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            768: {
                items: 2
            },
            992:{
                items:2,
                nav: true
            },
            1400:{
                items: 2,
                margin:36,
                nav: true
            },
            1800:{
                items: 2,
                margin:50,
                nav: true
            }
            
        }
    });
    $(".owl-carousel.ad_previewSlider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        margin:16,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    });

    /* custom smooth scroll */
    $(".cus_anclink").on("click", function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top-$(this.hash).attr("data-ancOffset")
        }, 800);
    });

    /*_______________ end blog page _______________*/

    /*_______________ start set growth plan page _______________*/
   

    // changing appointment type
    $(".appointment_typeInp").change(function(){
        $(this).val()
        if($(this).val()==1){
            $(".appointment_definitely").fadeIn(200);
            $(".appointment_individual").fadeOut(0);
        }else{
            $(".appointment_individual").fadeIn(200);
            $(".appointment_definitely").fadeOut(0);
        }
    });

    // creating appointment item
    $(".appointment_numInp").change(function(){
        if( $(this).val()>$(".appointment_defItem").length){
            var i_n;
            var i_html="";
            for (i_n = $(".appointment_defItem").length ; i_n< $(this).val(); i_n++) {
                i_html+='<div class="form-select gInp_item appointment_defItem mb-3" data-bs-toggle="modal" data-bs-target="#appointment_modal"><input class="d-none" type="text" name="appt_date[]" id="" value=""><div class="appointment_defItem_title">Termin '+(i_n+1)+'</div><div class="appointment_defItem_date"></div></div>';
            }
            $(".appointment_definitely").append(i_html);
        }else{
            var i_n;
            for (i_n = $(".appointment_defItem").length ; i_n > $(this).val(); i_n--) {
                $(".appointment_defItem")[i_n-1].remove();
            }
        }
    });

    
    $("[data-tgl_inprow]").change(function(){
        if($(this).is(":checked")){
            $("."+$(this).attr("data-tgl_inprow")).addClass("show");
        }else{
            $("."+$(this).attr("data-tgl_inprow")).removeClass("show");
        }
    });

    // calcute price 
    $(".gInp_price").keyup(function(){
        var cVal=$(this).val().trim();
        cVal=cVal.replace(",", ".");
        var mVal=parseFloat(cVal);
        var calc_val=mVal*(100/120.54);
        calc_val=calc_val.toFixed(2).toString().replace(".",",");
        if(calc_val==""){
            $(".gInp_price_preview").text(0);

        }else{
            $(".gInp_price_preview").text(calc_val);
        }
    });

    // showing file name
    $(".gFile_inpBox input").change(function(){
        $(this).parents(".gFile_inpBox").find(".gFile_inpFilename").text($(this)[0].files[0].name);
    });

    // date picker 
    let fp;
    if(typeof flatpickr === "function"){
        fp=$(".setGrowth_dateInp").flatpickr({
            minDate: "today",
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            inline: true,
            locale: "de"
        });
    }
    // appointment item value set
    var c_tar;
    $(document).click(function(){
        $(".appointment_defItem").click(function(){
            c_tar=$(this);
           var cApptData= $(this).find("input").val().trim();
            if( cApptData !==""){
               var  cApptDataArr=cApptData.split(" ");
               $("#appt_date").val(cApptDataArr[0] + " " +cApptDataArr[1]);
                fp.setDate(cApptDataArr[0] + " " +cApptDataArr[1]);
                $("#appt_duration").val(cApptDataArr[2]);
            }
        });
    })
    //modal value

    $("#appointment_modal_submitBtn").click(function(){
        var appt_date=$("#appt_date").val().trim();
        // 2022-07-29 12:00
        var appt_duration=$("#appt_duration").val().trim();
        // 120
        $(c_tar).find("input").val(appt_date+" "+appt_duration);
        
        var appt_dateTimeArr=appt_date.split(" ");
        var appt_dateArr=appt_dateTimeArr[0].split("-");

        var appt_timeArr=appt_dateTimeArr[1].split(":");
        var end_time=parseInt(appt_timeArr[0])*60+parseInt(appt_timeArr[1])+parseInt(appt_duration);
        var end_min=end_time%60;
        var end_hr=(end_time- end_min)/60;
        end_min=(end_min<10)?"0"+end_min:end_min;
        var fmt=appt_dateArr[1]+"/"+appt_dateArr[2]+"/"+appt_dateArr[0]+" - "+appt_dateTimeArr[1]+"Uhr bis "+end_hr+":"+end_min+"Uhr";
        $(c_tar).find(".appointment_defItem_date").text(fmt);
        $(c_tar).addClass("show_date");
        if(appt_date!=="" && appt_duration!==""){
            $("#appointment_modal").modal("hide");
        }

    });

    // faq add item button

    let faq_inpGrp;
    if($(".faq_inpGrp").length>0){
        faq_inpGrp=$(".faq_inpGrp")[0].outerHTML;
    }
    $(".faq_admoreBtn").click(function(){
        if($(".faq_inpGrps .faq_inpGrp").length<4){
            $(".faq_inpGrps").append(faq_inpGrp);
            if($(".faq_inpGrps .faq_inpGrp").length==4){
                $(this).attr("disabled","disabled");
                $(this).fadeOut(0);
            }
        }
    });

    $(".inp_for").change(function(){
        if($(this).is(":checked")){
            $(this).parents(".inp_forBox").addClass("for_share");
        }else{
            $(this).parents(".inp_forBox").removeClass("for_share");
        }
    });

    $(".hashtags_inp").keyup(function(ev){
        var cVal=$(this).val();

        var mVal;
        var keycode = (ev.keyCode ? ev.keyCode : ev.which);
        if(keycode == "13"){
            mVal=cVal+"#";
            if(mVal.startsWith("#")==false){
                $(this).val("#"+mVal);
            }else{
                $(this).val(mVal);
            }
        }else if(keycode=="32"){
            mVal=cVal.replace(" ","\n#");
            if(mVal.startsWith("#")==false){
                $(this).val("#"+mVal);
            }else{
                $(this).val(mVal);
            }
        }
    })

    /*_______________ end set growth plan page _______________*/

    /*_______________ start ad marketplace page _______________*/

    $(".ad_filterCtgHeader").click(function() {
        $(".ad_filterCtgBox").toggleClass("collapse_list");
    });

    if (typeof flatpickr === "function") {
        fp = $(".ad_dateRange").flatpickr({
            minDate: "today",
            dateFormat: "Y-m-d",
            locale: "de",
            mode: "range"
        });
    }

    $(".extra_filterOptHeader").click(function() {
        $(".extra_filterOptsBox").toggleClass("collapse_list");
    });

    $(".owl-carousel.ad_sliderBox").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        margin: 16,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4,
                nav: true,
                dots: false
            }

        }
    });
    $(".owl-carousel.ad_previewSlider2").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        margin: 16,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    });


    $("#filter_btn").click(function() {
        $("#ad_filterCol").toggleClass("active_filterBox");
    });
    $(".ad_filterColBackdrop").click(function() {
        $("#ad_filterCol").toggleClass("active_filterBox");
    });

    $("#price_rangeInp").slider({
        tooltip: 'always',
        ticks_tooltip: true,
        formatter: function(value) {
            return "€"+value[0] + " bis €" + value[1];
        },
    })


    /*_______________ end ad marketplace page _______________*/
});

