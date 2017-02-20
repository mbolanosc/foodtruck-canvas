//function Curves(xStart,yEnd,cStart,cEnd,curveEndA,curveEndB,lineWidth,curveColor,this.context){

function Ligths(position, context,cStart,cEnd,curveEndA,curveEndB) {
  if (!(this instanceof Ligths)) {
    return new Ligths(position, context,cStart,cEnd,curveEndA,curveEndB);
  }
	this.Colors = ['#92F22A','#E01931','#1DABB8','#44BBFF'];

  this.context = context;
  this.position = position;
	this.cStart = cStart;
	this.cEnd = cEnd;
	this.curveEndA = curveEndA;
	this.curveEndB = curveEndB;

  this.update();
}

Ligths.prototype.update = function() {
	//select randomly a color
	var item = this.Colors[Math.floor(Math.random()*this.Colors.length)];
	console.log('COLOR ',item);

	//Circle(Vector(221, 321), 2, true, item, false, item, 1, this.context);

  this.render();
}

Ligths.prototype.render = function() {


  this.context.beginPath();
  this.context.moveTo(this.position.x, this.position.y); //x,y
  //this.context.quadraticCurveTo(150, 167, 200, 133);
  this.context.quadraticCurveTo(this.cStart, this.cEnd, this.curveEndA, this.curveEndB); //end x,y
  this.context.lineWidth = 2;
  this.context.strokeStyle = 'black';
  this.context.stroke();
  this.context.closePath();

	//luces
	Circle(Vector(221, 321), 2, true, 'tomato', false, "tomato", 1, this.context);
	Circle(Vector(226, 328), 2, true, 'yellow', false, "tomato", 1, this.context);
	Circle(Vector(232, 334), 2, true, '#92F22A', false, "#92F22A", 1, this.context);
	Circle(Vector(240, 335), 2, true, '#FEC606', false, "#FEC606", 1, this.context);
	Circle(Vector(248, 325), 2, true, '#10D2E5', false, "#10D2E5", 1, this.context);

	Circle(Vector(254, 330), 2, true, '#92F22A', false, "#92F22A", 1, this.context);
	Circle(Vector(260, 339), 2, true, 'red', false, "red", 1, this.context);
	Circle(Vector(270, 339), 2, true, 'yellow', false, "yellow", 1, this.context);
	Circle(Vector(277, 330), 2, true, '#10D2E5', false, "#10D2E5", 1, this.context);
	Circle(Vector(280, 321), 2, true, 'red', false, "red", 1, this.context);

	Circle(Vector(285, 330), 2, true, '#92F22A', false, "#92F22A", 1, this.context);
	Circle(Vector(294, 340), 2, true, 'yellow', false, "yellow", 1, this.context);
	Circle(Vector(305, 338), 2, true, '#10D2E5', false, "#10D2E5", 1, this.context);
	Circle(Vector(313, 330), 2, true, 'red', false, "red", 1, this.context);
	Circle(Vector(320, 321), 2, true, '#92F22A', false, "#92F22A", 1, this.context);


  this.context.resetTransform();

}
