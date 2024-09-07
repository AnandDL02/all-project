$(document).ready(function(){
    $("#menu").click(function(){
        $(".list").css("margin-left", "0px");
        $("#menu").hide();
    })
})

$(window).scroll(function()
{
    $(".nevbar").toggleClass("background",$(this).scrollTop()>100);
});



