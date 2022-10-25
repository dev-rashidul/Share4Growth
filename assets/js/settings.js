$(document).ready(function(){
    /* ......... start general settings ......... */

    // preview image
    $(".stg_pflImgInp").change(function(){
        var file = $(this).get(0).files[0];
 
        if(file){
            var reader = new FileReader();
 
            reader.onload = function(){
                $("#stg_pflImg_inpPreview").attr("src", reader.result);
                $("#stg_pflImg_inpPreview").fadeIn(100);
            }
 
            reader.readAsDataURL(file);
        }
    });

    // show/hide business info section
    $(".business_infoTglInp").change(function(){
        if($(this).prop('checked')){
            $(".business_infoSec").fadeIn(100)
        }else{
            $(".business_infoSec").fadeOut(100)
        }
    });
   

    // changing business info by personal info
    $("[data-p_inp]").keyup(function(){
        if($(".use_pData_inpTgl").prop('checked')){
            if($(this).attr("data-p_inp")=="fname" || $(this).attr("data-p_inp")=="lname"){
                $("[data-p_inpTo='name']").val($('[data-p_inp="fname"]').val()+" "+$('[data-p_inp="lname"]').val());
            }else{
                $("[data-p_inpTo='"+$(this).attr("data-p_inp")+"']").val($(this).val());
            }
        }
    });


    // mode
    $(".use_pData_inpTgl").change(function(){
        if($(this).prop('checked')){
            $("[data-p_inp]").each(function(ind,elm){
                if($(elm).attr("data-p_inp")=="fname" || $(elm).attr("data-p_inp")=="lname"){
                    $("[data-p_inpTo='name']").val($('[data-p_inp="fname"]').val()+" "+$('[data-p_inp="lname"]').val());
                }else{
                    $("[data-p_inpTo='"+$(elm).attr("data-p_inp")+"']").val($(elm).val());
                }
            })
        }
    });




    // phone number validation
    var input_2 = document.querySelector("#phone_2"),
        errorMsg_2 = document.querySelector("#error_msg_2"),
        validMsg_2 = document.querySelector("#valid_msg_2");
    var errorMap_2 = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
    var iti_2;
    if(typeof window.intlTelInput === "function"){
        iti_2 = window.intlTelInput(input_2, {
            initialCountry: "de",
            onlyCountries: ["at", "de", "ch"],
            separateDialCode: true,
            nationalMode: true,
            allowDropdown: true
        });
    }

    var reset_2 = function() {
        input_2.classList.remove("error");
        errorMsg_2.innerHTML = "";
        errorMsg_2.classList.add("hide");
        validMsg_2.classList.add("hide");
    };
    if(input_2 !==null){
        input_2.addEventListener('blur', function() {
            reset_2();
            if (input_2.value.trim()) {
                if (iti_2.isValidNumber()) {
                    validMsg_2.classList.remove("hide");
                } else {
                    input_2.classList.add("error");
                    var errorCode_2 = iti_2.getValidationError();
                    errorMsg_2.innerHTML = errorMap_2[errorCode_2];
                    errorMsg_2.classList.remove("hide");
                }
            }
        });
        // on keyup / change flag: reset
        input_2.addEventListener('change', reset_2);
        input_2.addEventListener('keyup', reset_2);
    }


    // .

    
    /* ......... end general settings ......... */
})