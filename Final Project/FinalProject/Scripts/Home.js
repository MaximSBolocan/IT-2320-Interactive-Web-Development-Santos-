var Main = {};
$(document).ready(function () {
    $("#login").click(Main.createLogin)
    $("#account").click(Main.createAccount)
    
   
    
});
Main.createLogin = function () {
    $("#login").remove();
    $("#account").remove();
    $("#button").remove();
    var login = "User Name <br><input type='text' value='' id='text1' min='6'> <br> Password<br> <input type='password' value='' min='6' id='password'><br><button  onclick='Main.Login()'>Login</button> "
   

    $("#info").prepend(login);
}
 Main.createAccount=function()
{
    $("#login").remove();
    $("#account").remove();
    var createAcout = "User Name <input type='text' value='' id='text' min='6' placeholder='at least 6 caracters '> <br>Password<br><input type='password' value='' id='password'min='6' placeholder='at least 6 caracters ' ><br>Email<br><input type='email' value='' id='email'> <br>Email Confirm<br><input type='email' value='' id='emailC'><br><button onclick='Main.CreateAccount()'>Create</button>"

    
    $("#info").prepend(createAcout);
    
 }
 Main.Login = function () {
     
     var userName = $('#text1[value=""]').val()
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
              var name = deserializedData.Username;
              var message = deserializedData.Message;
              var password = deserializedData.Password;
              var control2 = "Success";
              $("#info").remove();
              $("#text").append("<div id='info'></div>")
              if (message == control2) {
                  alert("succes")
                  Main.AccountInfo(userName)

              }
              else
              {
                  alert("wrong password or user name")
                  var page = "<div id='info'><div  id='login'>Login</div><div  id='account'> Create Acount</div></div>"
                  $("#info").remove();
                  $("#text").prepend(page);
                  $("#login").click(Main.createLogin)
                  $("#account").click(Main.createAccount)

              }
            
          }
      })

 }
 
 Main.AccountInfo = function (name) {
     var user = name;
     var userName;
     var password;
     var email;
     var button2 = "<br><button id='button2' name='Update'>Update</button>"
     

     $.ajax
      ({
          url: "Home/GetAccountInformation",
          data:
                {
                    Username:user,
                },
          success: function (response) {
              var deserializedData = JSON.parse(response);
              
              var textPayload = JSON.parse(deserializedData.Payload);
              userName = textPayload.account.username;
              password = textPayload.account.password;
              email = textPayload.account.emailadd;
              $("#info").append("User Name:<div  id='user' class='form' ></div> ");
              $("#user").append(userName);
              $("#info").append("Password:<div  id='password' class='form' ></div>");
              $("#password").append(password);
              $("#info").append("Email:<div id='email' class='form'  ></div>");
              $("#email").prepend(email);
              $("#info").append(button2);
              $("#button2").click(Update)
              
              
          }
      })
     
     function Update() {
         

         var button3 = "<br><button id='button3' >Validate</button>"
         /*alert("start1")*/
         $("#info").remove()
         $("#text").prepend("<div id='info'></div>")
         $("#info").append("User Name:<div  id='user' class='form' ></div> ");
         $("#user").append(userName);
         $("#info").append("Password:<input type='text' id='password' value=''class='form' >");
         $("#password").val(password);
         $("#info").append("Email:<input type='text' id='email' value=''class='form'  >");
         $("#email").val(email);
         $("#info").append(button3)
         $("#button3").click(Validate)
         
     }
     
         
     function Validate() {
             var tag1 = "password"
             var tag2 = "emailadd"
             /*alert("validating")*/
            
             
             if ($('#password[value=""]').val() != password) {
                 alert("diferentpass")
                 var newPasword = $('#password[value=""]').val();
                 Main.UpdateAccount(userName, tag1, newPasword);
             }

             if ($('#email[value=""]').val() != email) {
                 alert("diferentmail")
                 var newEmail = $('#email[value=""]').val();
                 Main.UpdateAccount(userName, tag2, newEmail)
             }
             else {
                 $("#info").remove()
                 $("#text").append("<div id='info'></div>")
                 Main.AccountInfo(userName)
             }
             
         
     }
 }
 Main.UpdateAccount = function (name, elementname, elementvalue) {

     /*alert("start")*/
     var user = name;
     var elementName = elementname;
     var elementValue = elementvalue;

     $.ajax
     ({
         url: "Home/AddOrUpdateElement",
         data:
               {
                   Username: user,
                   ElementName: elementName,
                   ElementValue: elementValue
               },

         success: function (response) {
             var deserializedData = JSON.parse(response);
             /*alert("im here")*/
             var textError =  deserializedData.Error ;
             var textMessage = deserializedData.Message;
             var textPayload = JSON.parse(deserializedData.Payload);
             userName = textPayload.account.username;
             password = textPayload.account.password;
             email = textPayload.account.emailadd;
             $("#info").remove()
             $("#text").append("<div id='info'></div>")
             /////////////////////////////////////////////////////////////////////////////////////////
      
             Main.AccountInfo(userName)
                    
          /////////////////////////////////////////////////////////////////////////////////////////
         }

     })

 }
 
 Main.CreateAccount = function () {
     var userName = $('#text[value=""]').val()
     var password = $('#password[value=""]').val()
     var email = $('#email[value=""]').val()
     var emailCo = $('#emailC[value=""]').val()
     /*alert("startCreating")*/
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

          success: function (response) {
              var deserializedData = JSON.parse(response);
              var responseMessage = deserializedData.Message;
              var userNameMessage=deserializedData.Username;
              var PasswordMessage=deserializedData.Password;
              var EmailAddMesage=deserializedData.EmailAdd;
              var EmailConMessage=deserializedData.EmailCon;
              var control = "Success"
              $("#info").remove()
              $("#text").append("<div id='info'></div>")
              if(responseMessage==control)
              {
                  Main.AccountInfo(userName)
              }
              else
              {
                  alert(" "+responseMessage+" User Name is "+userNameMessage+" Password is "+PasswordMessage+" Email adress is "+EmailAddMesage+" Email Con is "+EmailConMessage)
                  Main.createAccount()
              }
              

          }
      })

 }