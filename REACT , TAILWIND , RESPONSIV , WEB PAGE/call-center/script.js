$(document).ready(function(){
   
    $("#menu").click(function(){
        $(".si").toggleClass("hi");
       
    })
})

$(window).scroll(function()
{
    $(".nevbar").toggleClass("background",$(this).scrollTop()>100);
});



