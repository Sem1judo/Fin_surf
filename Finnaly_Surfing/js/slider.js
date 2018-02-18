window.onload = function () {
    let doc = document,
        wrSlImg = doc.querySelector(".wrapper-slider_images"),
        imagesLi = wrSlImg.querySelectorAll(".slider_images"),
        wrSlContent = doc.querySelector(".wrapper-slider_content"),
        wContent = 400,
        currentThem = 0,
        imgActive = "slider_images--active",
        baseImage = "slider_images",
        qThem=wrSlContent.querySelectorAll(".slider__images-content").length,
        wrSlNumber = doc.querySelector(".wrapper-slider_nav");

        // slImgContent = wrSlContent.getElementsByClassName("slider__images-content");
        doc.querySelector(".wrapper-slider_btn-prev").onclick = function() {
        moveContent(-1);
    };
    doc.querySelector(".wrapper-slider_btn-next").onclick = function() {
        moveContent(1);
    };
    function moveContent(direction) {
        currentThem += direction;
        if(currentThem > qThem - 1) currentThem = 0;
        else if(currentThem < 0)  currentThem = qThem - 1;

        wrSlContent.style.marginLeft = -400*currentThem + "px";
        wrSlNumber.querySelector(".wrapper-slider-numbers-current").innerHTML = currentThem+1;
        changeImages(imagesLi[currentThem]);
    }
    function changeImages(element) {
       let activeImages = wrSlImg.querySelector("."+imgActive);
       if (activeImages) activeImages.className = baseImage;
       element.className += " "+imgActive;
    }
    // auto correct width/number
    (function () {
        wrSlContent.style.width = wContent*qThem+"px";
        wrSlContent.style.transition = ".7s ease";

        wrSlNumber.querySelector(".wrapper-slider-numbers-all").innerHTML = qThem;
    })();
};




