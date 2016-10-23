$(document).ready(function () {
    $("button").click(Home.Button);
});
var Home = {}
Home.Button=function ()
{  
    var number = $('input[value=""]').val()
    
    
    $.ajax({

        url: "Home/GetPlayerInformation",
        data: { PlayerNumber: number},
        success: function (response) {
                 $(".output").html(response);

        }


    })
}
