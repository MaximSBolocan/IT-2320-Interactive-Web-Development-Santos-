var Main = {};
$(document).ready(function () {
    $("#login").click(Main.createLogin)
    $("#acount").click(Main.createAccount)
});
Main.createLogin = function () {
    $("#login").remove();
    $("#acount").remove();
    var login = "<input type='text'value='UserName'> <br><input type='text' value='Password'>"
    var button = "<button onclick='alert(Main.alertLogin)'>Submit</button>"
    $("#Main").prepend(login, button);
}
 Main.createAccount=function()
{
    $("#login").remove();
    $("#acount").remove();
    var createAcout = "<input type='text'value='UserName'> <br><input type='text' value='Password'>"
    var createEmail = "<input type='text'value='Email'> <br><input type='text' value='ConfirmEmail'>"
    var button = "<button onclick='alert(Main.alertCreateAccount)'>Submit</button>"
    $("#Main").prepend(createAcout, createEmail,button);
    
 }
 Main.alertLogin=function()
 {
     alert("Login")
 }
 Main.alertCreateAccount=function()
 {
     alert("Account Create ")
 }

