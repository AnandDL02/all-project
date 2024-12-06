$(document).ready(function () {
    $("#icon1").click(function () {
        $(".block1").css("display", "block")
    })

    $("#icon2").click(function () {
        $(".block1").css("display", "none")
    })

    $(window).scroll(function () {
        $('.img6').toggleClass('background', $(this).scrollTop() > 300);
    });

    $(window).scroll(function () {
        $('.img8').toggleClass('background1', $(this).scrollTop() > 300);
    });

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".btn3",
        prevEl: ".btn2",
      },
});
jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        
        breakpoints: {
            '576': {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            '768': {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            '992': {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            '1300': {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
        // Optional parameters   
        freeMode: true,
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

});