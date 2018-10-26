var x;
var y;
var r;
var angle;
var vit;

function Circle(x ,y ,r ,vit)
{
	this.x = x;
	this.y = y;
	this.r = r;
	this.angle = 0;
	this.vit = vit;
}

Circle.prototype.show = function()
{
	noFill();
	stroke(255,100);
	strokeWeight(1);
	ellipse(this.x ,this.y ,this.r*2 ,this.r*2);
}



Circle.prototype.draw = function()
{	
	noFill();
	stroke(255);
	ellipse(this.x,this.y-this.r,1,1);
}

Circle.prototype.move = function(circle)
{
	this.x = circle.x + (circle.r + this.r) * cos(this.angle);
	this.y = circle.y + (circle.r + this.r) * sin(this.angle);
	this.angle = this.angle + this.vit;
}