 var MainPage={};
 
 

// The team Constructor !!!!!!!
MainPage.Team = function ( teamName) 
{  
 this.TeamName =teamName;
 this.Players= {};
 
 
 }
 MainPage.Team.prototype.SetTeamName=function(teamName )
 {
	 this.TeamName=teamName;
 }
 // The PLayer Constructor !!!!!!!!!!!!!
 MainPage.Player=function(name)
{
	
	this.LastName= name ;
}
MainPage.Player.prototype.GetPlayerName=function()
{
	return this.LastName
}
///////////////////////////////////////////////////////////////////////////////
MainPage.TEamRed=new MainPage.Team();//new team
MainPage.TEamRed.SetTeamName("TEamRed");//creating name for the team 
//creation of new players in the new team 
MainPage.TEamRed.Players.IronMan=new MainPage.Player("Iron Man");
MainPage.TEamRed.Players.SpiderMan =new MainPage.Player("SpiderMan");
MainPage.TEamRed.Players.Hulk =new MainPage.Player("Hulk");
MainPage.TEamRed.Players.BlackWidow =new MainPage.Player("Blck Widow");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
MainPage.TEamBlue=new MainPage.Team();//new team
MainPage.TEamBlue.SetTeamName("Team Blue");//creating name for the team 
//creation of new players in the new team 
MainPage.TEamBlue.Players.CaptainAmerica=new MainPage.Player("Captain America");
MainPage.TEamBlue.Players.WinterSolder =new MainPage.Player("Winter Solder");
MainPage.TEamBlue.Players.Hawkeye =new MainPage.Player("Hawkeye");
MainPage.TEamBlue.Players.AntMan =new MainPage.Player("Ant-Man");
////////////////////////////////////////////////////////////////////////////////
document.body.innerHTML=MainPage.TEamRed.TeamName;
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.IronMan.LastName; 
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.SpiderMan.LastName; 
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.Hulk.LastName;
 document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.BlackWidow.LastName;
 document.body.innerHTML += "<br/>"
 document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamBlue.TeamName;
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamBlue.Players.CaptainAmerica.LastName; 
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamBlue.Players.WinterSolder.LastName; 
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamBlue.Players.Hawkeye.LastName;
 document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamBlue.Players.AntMan.LastName;

document.body.innerHTML += "<br/>"
 document.body.innerHTML += "<br/>"
 
 document.body.innerHTML+=MainPage.TEamRed.Players.IronMan.GetPlayerName(); 
document.body.innerHTML += "<br/>"

