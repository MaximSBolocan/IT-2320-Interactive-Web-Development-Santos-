$(document).ready(function () {

    
    var cells = $(".cell");
    var colorCount = 0;
    

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function ()
    {
        
        if ($(this).hasClass("red"))
        {                       
            $(this).addClass("highlightRed");
            $(this).removeClass("red");
            highlightEventON($(this));
        }
        else if ($(this).hasClass("highlightRed"))
        {
            highlightEventOFF($(this));
            $(this).addClass("red");
            $(this).removeClass("highlightRed");
        }

        else if ($(this).hasClass("black")) {
            highlightEventON($(this));
             $(this).addClass("highlightBlack");
             $(this).removeClass("black");
        }
        else if ($(this).hasClass("highlightBlack")) {
            highlightEventOFF($(this));
            $(this).addClass("black");
            $(this).removeClass("highlightBlack");
        }
        else if ($(this).hasClass()) {

        }
       
     
        
        
        
    });
    
   
  
})

    function  highlightEventON(a)
    {
        a.css("border", "solid lime")
        alert("on")
     }
    function highlightEventOFF(a)
    {
            a.css("border", "0px");
            alert("OFF");
    }
