
    const einnahmenBtn = document.querySelector(".ennahToggle");
    const einnahmenContent = document.querySelector(".einnahmenContent")
    const einnahmenContent2 = document.querySelector(".einnahmenContent2")
    const me4 = document.querySelector(".me4")
    const share4 = document.querySelector(".share4")

    einnahmenBtn.addEventListener("click", function(){
        einnahmenContent.classList.toggle("active")
        einnahmenContent2.classList.toggle("active")
        me4.classList.toggle("active")
        share4.classList.toggle("active")
    })
