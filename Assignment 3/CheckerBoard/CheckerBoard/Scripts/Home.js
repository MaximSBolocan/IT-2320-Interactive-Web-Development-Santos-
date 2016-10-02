$(document).ready(function () {

    //alert("pagina so reinoit");
    var cells = $(".cell");
    var colorCount = 0;
    //var Piece=$(".piece")

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }
    

    mainPage.highlightEvent();
   
   
});

var mainPage = {};

mainPage.highlightEvent= function()
{
    var newPiece=null;
    var curentpiece = $(".piece");
    
    curentpiece.click(function()
    {
       if (curentpiece!=newPiece)
        {
          $(this).css("border", "3px solid black");
          newPiece = curentpiece;
        }
        else  
        {
            curentpiece = curentpiece.css("border", "");
            newPiece=null;
        }
        
    })


    

    
     
}
