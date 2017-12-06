// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    $("#episode-one-link").click(function(){
        $('#episode-one').show('slowest')
            .css('background-color', "black")
            .css('color', "yellow"); 
        $("#episode-two").hide("slow");
        $("#episode-three").fadeOut("slow");
        $("#episode-four").hide("slow");
        $("#episode-five").hide("fastest");
        $("#episode-six").fadeOut("slow");
        $("#episode-seven").fadeOut("slow");
    });
   

    $("#episode-seven-link").click(function() {
        $('.movies').hide("fast"); 
        var target = $("#episode-seven-link").attr("data-target"); 
        var target = "#" + target; 
        $(target).fadeIn(3000) 
            .css("background-color", "black")
            .css("color", "yellow");
    });
});

