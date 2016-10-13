 var MainPage={};
 
 

// The team Constructor !!!!!!!
MainPage.Team = function ( teamName) 
{  
 this.TeamName =teamName;
 this.Players= {};
 
 
 }
 // The PLayer Constructor !!!!!!!!!!!!!
 MainPage.Player=function(name)
{
	
	this.LastName= name ;
}
MainPage.TEamRed=new MainPage.Team("Red");//new team
MainPage.TEamRed.Players.IronMan=new MainPage.Player("Iron Man");
MainPage.TEamRed.Players.SpiderMan =new MainPage.Player("SpiderMan");
MainPage.TEamRed.Players.Hulk =new MainPage.Player("Hulk");
MainPage.TEamRed.Players.BlackWidow =new MainPage.Player("Blck Widow");
document.body.innerHTML=MainPage.TEamRed.Players.IronMan.LastName; 
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.SpiderMan.LastName; 
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.Hulk.LastName;
 document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.TEamRed.Players.BlackWidow.LastName;

// MainPage.Team ={firstPlayer:"Iron Man",secondPlayer:"Hulk",thirdPlayer:"SpiderMan",fouthPlayer:"Black Widow"}
// document.body.innerHTML =MainPage.Team.firstPlayer;
// document.body.innerHTML += "<br/>"
// document.body.innerHTML+=MainPage.Team.secondPlayer;
// document.body.innerHTML += "<br/>"
// document.body.innerHTML +=MainPage.Team.thirdPlayer;
// document.body.innerHTML += "<br/>"
// document.body.innerHTML +=MainPage.Team.fouthPlayer;
// document.body.innerHTML += "<br/>"
// document.body.innerHTML+=Team.getfirstplayer();
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// MainPage.prototype.getfirstplayer=function()
// {
	// return this.firstPlayer;
// }
// MainPage.Team.prototype.adPlayer =function(function)
// {
	// this.persons=function;
// }


 // MainPage.Team.prototype.GetTeamName = function()
 // {
	//return this.TeamName;
 // }

// MainPage.Steve= new MainPage.Player("Steve");
// MainPage.Max= new MainPage.Player("Max");
// MainPage.RedTeam =new MainPage.Team("Red Team");
// MainPage.RedTeam.persons =new MainPage.Player("steve")
// MainPage.RedTeam.persons=MainPage.Steve,MainPage.Max.;
//MainPage.RedTeam.persons=MainPage.Max.LastName;


// MainPage.Team.prototype.GetPlayerName=function()
// {
	// this.Players.Player.prototype.getName= function()
	// {
		// return this.LastName;
	// }
// }



// MainPage.Player.prototype.SetName=function(name)
// {
	
	// this.LastName=name
// }
// MainPage.Player.prototype.SetNam =function(name)
// {
	 // this.LastName= name ;
// }

// MainPage.Team.prototype.Players.MainPage.Player.prototype.GetName =function()
// {
	// return this.LastName;
// }
  // MainPage.Clevelan= new MainPage.Team("Cleveland");
  // MainPage.Chcago = new MainPage.Team("Chicago");
  // MainPage.LeBrone=new MainPage.Player();
  // MainPage.Cleveland.adPlayer(MainPage.LeBrone=new MainPage.Player())
alert("")
// document.body.innerHTML = MainPage.Clevelan.TeamName;
//document.body.innerHTML = MainPage.TeamA.steve.GetName();
//document.body.innerHTML += "<br/>"
//document.body.innerHTML += MainPage.Bob.GetName();
//document.body.innerHTML += "<br/>"
//document.body.innerHTML += MainPage.Steve.GetName();
//document.body.innerHTML += "<br/>"