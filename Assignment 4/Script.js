var MainPage={};
MainPage.Person = function(firstName, lastName)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	

	//this.SetFirstName = function(name)
	//{
		//this.FirstName = name;
	//}
}
MainPage.Person.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName;
}

MainPage.Team = function ( fName ,lName  )
{
	this.NewPerson= new MainPage.Person(fName,lName)
	
	
}
MainPage.Team.prototype.GetFullTeam = function()
{ 
  for (var i=0;i<=this.length;i++)
  {
	return Team.FirstName + " " + Team.LastName;
  }
}
//MainPage.Alan = new MainPage.Person("Alana", "Santos");
//document.body.innerHTML = MainPage.Alan.GetFullName();
MainPage.TeamA= new MainPage.Team("Alana", "Santos");
document.body.innerHTML=MainPage.TeamA.GetFullTeam();