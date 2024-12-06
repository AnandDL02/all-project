$(document).ready(function () {
    $("#icon1").click(function () {
        $(".block1").css("display", "block")
    })

    $("#icon2").click(function () {
        $(".block1").css("display", "none")
    })


})

var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".mySwiper2", {
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});