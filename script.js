console.log("project 3")

$(document).ready(function(){
    $(".item").draggable({snap:true});



});



$(".item").mouseover(function(){
    $(".item").css("color","green");    
});

$(".item").each(function(){
    $(".item").css("color","green");    
});

$(".item").mouseout(function(){
    $(".item").css("color","gray");    
});






