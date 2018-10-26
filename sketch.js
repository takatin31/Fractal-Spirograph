var c1;
var c2;
var c3;
var c4;
var slider1;
var slider2;
var slider3;
var circles = [];
var list = [];
var r;
var sp;
var k;
var n;

function setup()
{
	createCanvas(800 ,600);
	background(51);
	n = 11;
	init();
	slider1 = createSlider(2,20,1);
	slider1.position(10,620);
}

function init()
{
	r = 150;
	k = -4;
	
	circles = [];
console.log(circles.length);
	for (var i = 0 ; i < n ; i++)
	{
		sp = radians(pow(k,i-1));
		circles[i] = new Circle(width/2,height/2,r,sp);
		r = r /3;
	}

}

function draw()
{

	background(51);
	if (slider1.value() != n)
	{
		list = [];
		n = slider1.value();
		init();
		console.log(circles.length);
	}
	
	
	circles[0].show();
	for (var i = 1 ; i < n ; i++)
	{
		circles[i].move(circles[i-1]);
		circles[i].show();
	}

	list.push(new p5.Vector(circles[n-1].x,circles[n-1].y));
	beginShape();
	stroke(255,0,255);
	strokeWeight(2);
	for (var i = 0 ;i < list.length ;i ++)
	{
		vertex(list[i].x,list[i].y);	
	}
	endShape();
}