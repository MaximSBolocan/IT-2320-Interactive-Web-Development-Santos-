$(document).ready(function () {
   ///// //$("button").click(Home.Button);
    $(".player-number-button").click(Home.Button)
});
var Home = {}
Home.Button = function () {
     var number = $('input[value=""]').val()
    $.ajax({
        url: "Home/GetPlayerInformation",
        data:
         {
             PlayerNumber:number
             //PlayerNumber: $(".player-number-textbox").children("input").val()
         },
        //this section gives us a string with player name and number
        success: function (response) {
        $(".output").html(response);

        }
///this section gives us just the name of the player 
        ///success:
           // function (response) {
               // var deserializedData = JSON.parse(response);
                //$(".output").empty();
                //$(".output").append(deserializedData.PlayerName);
            //}


    })
}
//conclusion : this assignment shoud us how to get data from an input and pass it
//to the server but in our
//case we allways would get player number 0, more explanation need !!!!!!!!!!!!