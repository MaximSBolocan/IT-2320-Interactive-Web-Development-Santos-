window.onload = function Button(){
var button= new Array();
button=document.getElementsByClassName("button");
    for (var i=0; i<button.length; i++){
		button[i].addEventListener("mouseover",getNewStyle);
		button[i].addEventListener("mouseout",getOldStyle);
	}

	  
}
function getOldStyle(event){
	event.target.className="button";
}

	
function getNewStyle(event){
	event.target.className="hover-button";
}