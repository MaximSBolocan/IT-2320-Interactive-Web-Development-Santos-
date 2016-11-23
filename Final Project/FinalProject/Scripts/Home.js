var Main = {};
$(document).ready(function () {
    $("#login").click(Main.createLogin)
    $("#account").click(Main.createAccount)
    
   
    
});
Main.createLogin = function () {
    $("#login").remove();
    $("#account").remove();
    var login = "User Name <br><input type='text' value='' id='text' min='6'> <br> Password<br> <input type='password' value=''min='6' id='password'>"
    var button = "<br><button  onclick='Main.Login()'>Login</button>"
    $("#text").prepend(login, button);
}
 Main.createAccount=function()
{
    $("#login").remove();
    $("#account").remove();
    var createAcout = "User Name <input type='text' value='' id='text' min='6'> <br>Password<br><input type='password' value='' id=' password'min='6'>"
    var createEmail = "<br>Email<input type='email' value='' id='email'> <br>Email Confirm<input type='email' value='' id='emailC>"
    var button = "<br><button onclick='Main.CreateAccount()'>Create</button>"
    $("#text").prepend(createAcout, createEmail,button);
    
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
              var textMessage = deserializedData.Message
              var textUser = deserializedData.Username;
              var textPassword = deserializedData.Password;
              $("#text").remove()
              /*$(".empty").prepend(textMessage);
              $(".empty").prepend(textUser);
              $(".empty").prepend(textPassword);*/
              
              Main.AccountInfo(userName);


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
  Main.AccountInfo=function(name)
  {
      var userName = name;
      var button = "<br><button id='button'>Uppdate</button>"
      $.ajax
       ({
           url: "Home/GetAccountInformation",
           data:
                 {
                     Username: userName,
                 },
           success: function (response) {
               var deserializedData = JSON.parse(response);
               
               var textError ="Error :" + deserializedData.Error + "<br>";
               var textMessage ="Message:" + deserializedData.Message + "<br>";
               var textPayload = JSON.parse(deserializedData.Payload);
               var userName = textPayload.account.username;
               var password = textPayload.account.password;
               var email = textPayload.account.emailadd;
               
              
               $(".empty").append("User Name:<input type='text' id='user' value='' class='form' readonly> ");
               $("#user").val(userName);
               $(".empty").append("Password:<input type='text' id='password' value=''class='form' readonly>");
               $("#password").val(password);
               $(".empty").append("Email:<input type='text' id='email' value=''class='form' readonly >");
               $("#email").val(email);
               
               $(".empty").append(textError, textMessage, button);
                updateCall=function(name)
               {
                    var Name = name;
                   Main.UpdateAccount(Name)
               }
               $("#button").click(updateCall(username));
                               
               /*$(".empty").append().text(payload);
               $(".empty").append(payload.account.username);
               $(".empty").append(payload.account.password);
               $(".empty").append(payload.account.emailadd);*/
               
              
           }
       })
      
  }
  Main.UpdateAccount= function(name)
  {

     alert("start")
      var userName = name;
      var elementName;
      var elementValue;

      $.ajax
      ({
          url: "Home/AddOrUpdateElement",
          data:
                {
                    Username: userName,
                    ElementName:elementName,
                    ElementValue:elementValue
                },

          success: function (response) {
              var deserializedData = JSON.parse(response);

          }

      })

  }
  
 

