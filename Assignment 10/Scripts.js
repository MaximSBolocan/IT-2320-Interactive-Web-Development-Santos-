var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.Picture01 = new Image();
Main.Picture01.src = "Pictures/01.jpg";
Main.Picture02 = new Image();
Main.Picture02.src = "Pictures/02.jpg";
Main.Picture03= new Image()
Main.Picture03.src = "Pictures/03.jpg";
Main.Picture04 = new Image()
Main.Picture04.src = "Pictures/04.jpg";
Main.Picture05 = new Image()
Main.Picture05.src = "Pictures/05.jpg";
Main.Picture06= new Image()
Main.Picture06.src = "Pictures/06.jpg";
Main.Picture07 = new Image()
Main.Picture07.src = "Pictures/07.jpg";
Main.Picture08 = new Image()
Main.Picture08.src = "Pictures/08.jpg";
Main.Picture09= new Image()
Main.Picture09.src = "Pictures/09.jpg";
Main.Picture10 = new Image()
Main.Picture10.src = "Pictures/10.jpg";
Main.X=0;
Main.Y=0;
Main.Canvas.onmousemove = function(event)
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.X = mouseX;
	Main.Y = mouseY;
}



Main.Pictures=[
Main.Picture01,
Main.Picture02,
Main.Picture03,
Main.Picture04,
Main.Picture05,
Main.Picture06,
Main.Picture07,
Main.Picture08,
Main.Picture09,
Main.Picture10
]


Main.Box = function(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;

	this.DrawAsImage = function(image)
	{
		Main.Context.drawImage(image, this.X, this.Y, this.Width, this.Height);
	}
}


Main.Boxes = [
    new Main.Box(50, 250, 100, 100),
    new Main.Box(175, 250, 100, 100),
    new Main.Box(300, 250, 100, 100),
	new Main.Box(425, 250, 100, 100),
	new Main.Box(550, 250, 100, 100),
	new Main.Box(675, 250, 100, 100),
	new Main.Box(800, 250, 100, 100),
	new Main.Box(925, 250, 100, 100),
	new Main.Box(1050, 250, 100, 100)
];
Main.PicturePlace= function()
{
	for (var i=0; i<Main.Boxes.length; i++)
	{
		Main.Boxes[i].DrawAsImage(Main.Pictures[i]);
	}
}
Main.Action=function()
{
	if(Main.X>550&&Main.X<650&&Main.Y>250&&Main.Y<350)
	{
		Main.Context.beginPath();
		Main.Context.moveTo(Main.X,Main.Y);
		ctx.lineTo(650,300);
		Main.Context.stroke();
		/*Main.Context.fillStyle =
		Main.Context.fillRect(550,250, 100, 100);
		alert("thisis working")*/
	}
}

Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);
	var window=
	Main.Context.fillStyle = "#e8dede";
    Main.Context.fillRect(0,240,1300,120)
	Main.PicturePlace();
	Main.Action();
	
	
     Main.Context.fillText("X: " + Main.X + "  Y: " + Main.Y, 100, 150);
	requestAnimFrame(function() { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	Main.Animate();
});