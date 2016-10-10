 var MainPage={};
 
 MainPage.Team ={firstPlayer:"Iron Man",secondPlayer:"Hulk",thirdPlayer:"SpiderMan",fouthPlayer:"Black Widow"}
document.body.innerHTML =MainPage.Team.firstPlayer;
document.body.innerHTML += "<br/>"
document.body.innerHTML+=MainPage.Team.secondPlayer;
document.body.innerHTML += "<br/>"
document.body.innerHTML +=MainPage.Team.thirdPlayer;
document.body.innerHTML += "<br/>"
document.body.innerHTML +=MainPage.Team.fouthPlayer;
document.body.innerHTML += "<br/>"
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// MainPage.Team = function ( teamName) 
// {  
 // this.TeamName =teamName;
 // this.persons= new MainPage.Player();
 // this.persons.SetName(steve);
 // }



// MainPage.Team.prototype.GetTeamName = function()
// {
	// return this.TeamName;
// }
// MainPage.Player=function()
// {
	
	// this.LastName;
// }
// MainPage.Player.prototype.SetName=function(name)
// {
	
	// this.LastName=name
// }


// MainPage.Player.prototype.GetName =function()
// {
	// return this.LastName;
// }
 // MainPage.TeamA= new MainPage.Team("TeamA");
//MainPage.TeamA.persons.SetName(steve)
// alert("")

document.body.innerHTML = MainPage.TeamA.steve.GetName();
//document.body.innerHTML += "<br/>"
//document.body.innerHTML += MainPage.Bob.GetName();
//document.body.innerHTML += "<br/>"
//document.body.innerHTML += MainPage.Steve.GetName();
//document.body.innerHTML += "<br/>"