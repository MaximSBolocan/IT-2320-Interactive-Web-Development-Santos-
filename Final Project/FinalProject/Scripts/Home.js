var Main = {};
$(document).ready(function () {
    $("#login").click(Main.createLogin)
    $("#account").click(Main.createAccount)
    
   
    
});
Main.createLogin = function () {
    $("#login").remove();
    $("#account").remove();
    $("#button").remove();
    var login = "User Name <br><input type='text' value='' id='text' min='6'> <br> Password<br> <input type='password' value='' min='6' id='password'>"
    var button = "<br><button  onclick='Main.Login()'>Login</button>"

    $("#text").prepend(login, button);
}
 Main.createAccount=function()
{
    $("#login").remove();
    $("#account").remove();
    var createAcout = "User Name <input type='text' value='' id='text' min='6' placeholder='at least 6 caracters '> <br>Password<br><input type='password' value='' id='password'min='6' placeholder='at least 6 caracters ' >"
    var createEmail = "<br>Email<input type='email' value='' id='email'> <br>Email Confirm<input type='email' value='' id='emailC'>"
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
                  var button = "<br><button id='button' name='Login'>Login</button>"
                  $("#text").empty();
                  $(".empty").append(deserializedData.Message);
                  $(".empty").append(deserializedData.Username);
                  $(".empty").append(deserializedData.Password);
                  $(".empty").append(deserializedData.EmailAdd);
                  $(".empty").append(deserializedData.EmailCon);
                  $(".empty").append(button)
                  $("#button").click(Main.createLogin);
                  
              }
          })
         
  }
  Main.AccountInfo=function(name)
  {
      var user = name;
      var userName;
      var password;
      var email;
      
      $.ajax
       ({
           url: "Home/GetAccountInformation",
           data:
                 {
                     Username: user,
                 },
           success: function (response) {
               var deserializedData = JSON.parse(response);
               var button = "<br><button id='button' name='Update'>Update</button>"
               var textError ="Error :" + deserializedData.Error + "<br>";
               var textMessage ="Message:" + deserializedData.Message + "<br>";
               var textPayload = JSON.parse(deserializedData.Payload);
                userName = textPayload.account.username;
                password = textPayload.account.password;
                email = textPayload.account.emailadd;
   /////////////////////////////////////////////////////////////////////////////////////////
               $(".empty").append("<p>User Name:<input type='text' id='user' value='' class='form' readonly></p> ");
               $("#user").val(userName);
               $(".empty").append("<p>Password:<input type='text' id='password' value=''class='form' ></p>");
               $("#password").val(password);
               $(".empty").append("<p>Email:<input type='text' id='email' value=''class='form'  ></p>");
               $("#email").val(email);
               $(".empty").append(textError, textMessage, button);
               $("#button").click(UpdateCall);
               ////////////////////////////////////////////////////////////////////////////////
           }
       })
      

      UpdateCall = function () {
          alert("begin")
          var tag1 = "password"
          var tag2 = "emailadd"
          if ($('#email[value=""]').val() != email && $('#password[value=""]').val() != password)
          {
              var newEmail = $('#email[value=""]').val();
              var newPasword = $('#password[value=""]').val();
              Main.UpdateAccount(userName, tag1, newPasword);
              Main.UpdateAccount(userName, tag2, newEmail)
           }
      if ($('#password[value=""]').val() != password) {
          alert("diferentpass")
          var newPasword = $('#password[value=""]').val();
          Main.UpdateAccount(userName,tag1, newPasword);
          }
          
      if ($('#email[value=""]').val() != email)
          {
          alert("diferentmail")
          var newEmail = $('#email[value=""]').val();
          Main.UpdateAccount(userName,tag2, newEmail)
      }
      
      
      $("#button").remove();
      $("p").remove();
      }
     

  }
  Main.UpdateAccount= function(name,elementname,elementvalue)
  {

     alert("start")
      var user = name;
      var elementName=elementname;
      var elementValue=elementvalue;

      $.ajax
      ({
          url: "Home/AddOrUpdateElement",
          data:
                {
                    Username: user,
                    ElementName:elementName,
                    ElementValue:elementValue
                },

          success: function (response) {
              var deserializedData = JSON.parse(response);
              alert("im here")
              var textError = "Error :" + deserializedData.Error + "<br>";
              var textMessage = "Message:" + deserializedData.Message + "<br>";
              var textPayload = JSON.parse(deserializedData.Payload);
              userName = textPayload.account.username;
              password = textPayload.account.password;
              email = textPayload.account.emailadd;
              $("#user").remove()
              $("#password").remove()
              $("#email").remove()
              /////////////////////////////////////////////////////////////////////////////////////////
              $(".empty").append("User Name:<div  id='user' class='form' ></div> ");
              $("#user").append(userName);
              $(".empty").append("Password:<div  id='password' class='form' ></div>");
              $("#password").append(password);
              $(".empty").append("Email:<div id='email' class='form'  ></div>");
              $("#email").append(email);
              $(".empty").append(textError, textMessage);
              
              /////////////////////////////////////////////////////////////////////////////////////////
          }

      })

  }
  
 

