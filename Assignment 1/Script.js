function BigButton1()
{
	var a=document.getElementsByClassName("button1");
	
	var b=document.getElementsByClassName("big");
	var x=a[0];
	
	if(x!="big")
	{
	x.className="big";
	}

	else
	{
		x.className="button1";
	}	
	
}
function BigButton2()
{
	var a=document.getElementsByClassName("button2");
	
	var b=document.getElementsByClassName("big");
	var x=a[0];
	
	if(x!="big")
	{
	x.className="big";
	}

	else
	{
		x.className="button2";
		
	}
	
}
		
function Normal1()
{
	var a=document.getElementsByClassName("button1");
	var b=document.getElementsByClassName("big");
	var x=b[0];
	if(x!="button1")
	{
	x.className="button1";
	}
	else
	{
	x.className="big";
	}
}
function Normal2()
{
	var a=document.getElementsByClassName("button2");
	var b=document.getElementsByClassName("big");
	var x=b[0];

	if(x!="button2")
	{
	x.className="button2";
	}
	else
	{
	
	x.className="big";
	}
}