console.log("project 3")

$(document).ready(function(){

    
    // let line1=$("line1");
    // let box1=$("box1");





    $(".item").draggable({
        snap:true
    });

    $(".box").droppable({
        over: function(event, ui){
            $(this).css("background-color", "#d17f77")    
            // .html("correct!").css("font-size","0.8rem");   
        },
        drop: function(event, ui){
            // $(this).css("background-color", "#ff4e3d") 
            $(ui.draggable).detach().css({top: -10,left: -10}).appendTo(this) 
            
            if(ui.draggable.attr("id") == "line1"){
                $(this).css("background-color", "#657f59") 
            }
            if(ui.draggable.attr("id") == "line2"){
                $(this).css("background-color", "#83a077") 
            }
            if(ui.draggable.attr("id") == "line3"){
                $(this).css("background-color", "#99ba8d") 
            }
            if(ui.draggable.attr("id") == "line4"){
                $(this).css("background-color", "#c5d8bc") 
            }
            if(ui.draggable.attr("id") == "line5"){
                $(this).css("background-color", "#d3ddce") 
            }
            if(ui.draggable.attr("id") == "line6"){
                $(this).css("background-color", "#6b7c59") 
            }
            if(ui.draggable.attr("id") == "line7"){
                $(this).css("background-color", "#8b9e77") 
            }
            if(ui.draggable.attr("id") == "line8"){
                $(this).css("background-color", "#a3b78d") 
            }
            if(ui.draggable.attr("id") == "line9"){
                $(this).css("background-color", "#c9d6bd") 
            }
            if(ui.draggable.attr("id") == "line10"){
                $(this).css("background-color", "#d5dbce") 
            }
            if(ui.draggable.attr("id") == "line11"){
                $(this).css("background-color", "#717c59") 
            }
            if(ui.draggable.attr("id") == "line12"){
                $(this).css("background-color", "#8f9b76") 
            }
            if(ui.draggable.attr("id") == "line13"){
                $(this).css("background-color", "#a8b58d") 
            }
            if(ui.draggable.attr("id") == "line14"){
                $(this).css("background-color", "#ccd3bc") 
            }
            if(ui.draggable.attr("id") == "line15"){
                $(this).css("background-color", "#d5d8ce") 
            }
            if(ui.draggable.attr("id") == "line16"){
                $(this).css("background-color", "#777c59") 
            }
            if(ui.draggable.attr("id") == "line17"){
                $(this).css("background-color", "#969b76") 
            }
            if(ui.draggable.attr("id") == "line18"){
                $(this).css("background-color", "#afb58d") 
            }
            if(ui.draggable.attr("id") == "line19"){
                $(this).css("background-color", "#d3d6bd") 
            }
            if(ui.draggable.attr("id") == "line20"){
                $(this).css("background-color", "#d9dbce") 
            }
            if(ui.draggable.attr("id") == "line21"){
                $(this).css("background-color", "#7c7c59") 
            }
            if(ui.draggable.attr("id") == "line22"){
                $(this).css("background-color", "#9e9e77") 
            }
            if(ui.draggable.attr("id") == "line23"){
                $(this).css("background-color", "#b7b78d") 
            }
            if(ui.draggable.attr("id") == "line24"){
                $(this).css("background-color", "#d6d6bd") 
            }
            if(ui.draggable.attr("id") == "line25"){
                $(this).css("background-color", "#dbdbce") 
            }

        },
        out: function(event, ui){
            $(this).css("background-color", "rgb(0,0,0,0)")
            // .html("")    

        }
        // $("#droppable").addClass("ui-state-highlight")
            //    .find("p")
            //         .html("Correct!");
        
    });


    $(".item").mouseover(function(){
        $(this).css("color","green");    
    });
    

    $(".item").mouseout(function(){
        $(".item").css("color","#2e2e2d");    
    });

    $("button").css({
        "position": "fixed",
        "bottom": "0",
        "right": "0",
        "width": "200",
        "background-color": "pink"
    });

    $("button").click(function(){
        $(".number").toggleClass("numberChange")
    });

    console.log("hi")
    let line1=$("line1")
    let line2=$("line2")
    let line3=$("line3")
    let line4=$("line4")

    let items=[line1, line2, line3, line4]
    console.log(items);

    // let randomize=$("item");
    // for(i=0; i<)
    


    
    

});










