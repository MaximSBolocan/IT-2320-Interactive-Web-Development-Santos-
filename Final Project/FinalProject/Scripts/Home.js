var Main = {};
$(document).ready(function () {
    $("#login").click(Main.createLogin)
    $("#acount").click(Main.createAccount)
    $("#button1").click(Main.AccountInfo)
    
});
Main.createLogin = function () {
    $("#login").remove();
    $("#acount").remove();
    var login = "User Name <input type='text'value='' id='text'> <br> Password <input type='password' value=''id='password'>"
    var button = "<button id='button1' onclick='Main.AccountInfo()'>Login</button>"
    $("#Main").prepend(login, button);
}
 Main.createAccount=function()
{
    $("#login").remove();
    $("#acount").remove();
    var createAcout = "User Name <input type='text'value='' id='text'> <br>Password<input type='password' value=''id='password'>"
    var createEmail = "Email<input type='text'value='' id='email'> <br>Email Confirm<input type='text' value=''id='emailC'>"
    var button = "<button onclick='Main.CreateAccount()'>Submit</button>"
    $("#Main").prepend(createAcout, createEmail,button);
    
 }
 Main.Login = function () {

     var userName = $('#text[value=""]').val()
     var password = $('#password[value=""]').val()
     $.ajax
      ({
          url: "Home/Login",
          data:
                {
                    Username: userName,
                    Password: password
                },

          success: function (response) {
              var deserializedData = JSON.parse(response);
              /* $(".output").empty();*/
              
              $("#Main").remove();
              var page = "<div class='Main' id='Main'><br><button onclick='Main.AccountInfo()'>Account Info</button><br></div>"
              $('body').prepend(page);
              $("#Main").prepend(deserializedData.Message);
              $("#Main").prepend(deserializedData.Username);
              $("#Main").prepend(deserializedData.Password);
              $("#Main").prepend(deserializedData.Password);

          }

      })
 }
  Main.CreateAccount = function () {
      var userName = $('#text[value=""]').val()
      var password = $('#password[value=""]').val()
      var email=$('#email[value=""]').val()
      var emailCo=$('#emailC[value=""]').val()

         $.ajax
          ({
              url: "Home/CreateAccount",
              data:
                    {
                        Username: userName,
                        Password: password,
                        EmailAdd: email,
                        EmailCon: emailCo
                    },

              success: function (response)
              {
                  var deserializedData = JSON.parse(response);
                  $(".output").empty();
                  $(".output").append(deserializedData.Message);
                  $(".output").append(deserializedData.Username);
                  $(".output").append(deserializedData.Password);
                  $(".output").append(deserializedData.EmailAdd);
                  $(".output").append(deserializedData.EmailCon);

              }

          })
  }
  Main.AccountInfo=function()
  {
      var userName = $('#text[value=""]').val()
     
      $.ajax
       ({
           url: "Home/GetAccountInformation",
           data:
                 {
                     Username: userName,
                     
                 },

           success: function (response) {
               var deserializedData = JSON.parse(response);
               
               $(".empty").append(deserializedData.Message);
               $(".empty").append(deserializedData.Payload);
               

           }

       })
  }

  
 

