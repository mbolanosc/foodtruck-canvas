//function Curves(xStart,yEnd,cStart,cEnd,curveEndA,curveEndB,lineWidth,curveColor,this.context){

function Ligths(position, context, cStart, cEnd, curveEndA, curveEndB) {
	if (!(this instanceof Ligths)) {
		return new Ligths(position, context, cStart, cEnd, curveEndA, curveEndB);
	}

	this.context = context;
	this.position = position;
	this.cStart = cStart;
	this.cEnd = cEnd;
	this.curveEndA = curveEndA;
	this.curveEndB = curveEndB;
	this.pool = [];

	// luces
	let light = Light(Vector(221, 321), this.context);
	this.pool.push(light);

	light = Light(Vector(226, 328), this.context);
	this.pool.push(light);

	light = Light(Vector(232, 334), this.context);
	this.pool.push(light);

	// Circle(Vector(232, 334), 2, true, '#92F22A', false, "#92F22A", 1, this.context);
	// Circle(Vector(240, 335), 2, true, '#FEC606', false, "#FEC606", 1, this.context);
	// Circle(Vector(248, 325), 2, true, '#10D2E5', false, "#10D2E5", 1, this.context);

	// Circle(Vector(254, 330), 2, true, '#92F22A', false, "#92F22A", 1, this.context);
	// Circle(Vector(260, 339), 2, true, 'red', false, "red", 1, this.context);
	// Circle(Vector(270, 339), 2, true, 'yellow', false, "yellow", 1, this.context);
	// Circle(Vector(277, 330), 2, true, '#10D2E5', false, "#10D2E5", 1, this.context);
	// Circle(Vector(280, 321), 2, true, 'red', false, "red", 1, this.context);

	// Circle(Vector(285, 330), 2, true, '#92F22A', false, "#92F22A", 1, this.context);
	// Circle(Vector(294, 340), 2, true, 'yellow', false, "yellow", 1, this.context);
	// Circle(Vector(305, 338), 2, true, '#10D2E5', false, "#10D2E5", 1, this.context);
	// Circle(Vector(313, 330), 2, true, 'red', false, "red", 1, this.context);
	// Circle(Vector(320, 321), 2, true, '#92F22A', false, "#92F22A", 1, this.context);




	this.update();
}

Ligths.prototype.update = function () {
	//select randomly a color
	//var item = this.Colors[Math.floor(Math.random() * this.Colors.length)];
	//console.log('COLOR ',item);
	//Circle(Vector(221, 321), 2, true, item, false, item, 1, this.context);
	this.render();

	this.pool.forEach(function (light) {
		light.update();
	}, this);


}

Ligths.prototype.render = function () {

	this.context.beginPath();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.moveTo(this.position.x, this.position.y);
	this.context.quadraticCurveTo(this.cStart, this.cEnd, this.curveEndA, this.curveEndB);
	this.context.quadraticCurveTo(this.cStart + 30, this.cEnd, this.curveEndA + 40, this.curveEndB);
	this.context.quadraticCurveTo(this.cStart + 60, this.cEnd, this.curveEndA + 70, this.curveEndB);
	this.context.stroke();
	this.context.closePath();

	// this.ligths = Ligths(Vector(this.position.x + 80, this.position.y + 20), this.context, 265, 360, 250, 320);
	// this.ligths = Ligths(Vector(this.position.x + 120, this.position.y + 20), this.context, 295, 360, 280, 320);
}

function Light(position, context) {
	if (!(this instanceof Light)) {
		return new Light(position, context);
	}

	this.context = context;
	this.position = position;
	this.currentColorIndex = randomBtween(0, 3);
	this.colors = ['#92F22A', '#E01931', '#1DABB8', '#44BBFF'];
	this.color = this.colors[this.currentColorIndex];
	this.timeToChange = randomBtween(60, 120);
	this.timer = 0;
}

Light.prototype.update = function () {

	if (this.timer >= this.timeToChange) {

		this.currentColorIndex++;

		if (this.currentColorIndex >= this.colors.length) {
			this.currentColorIndex = 0;
		}

		this.color = this.colors[this.currentColorIndex];
		this.timer = 0;
	}

	this.timer++;
	this.render();
}

Light.prototype.render = function () {
	this.context.fillStyle = this.color;
	this.context.beginPath();
	this.context.arc(this.position.x, this.position.y, 3, 0, (2 * Math.PI), false);
	this.context.fill();
	this.context.closePath();
}
