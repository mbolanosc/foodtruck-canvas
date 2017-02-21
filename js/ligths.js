
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
let light = Light(Vector(485, 321), this.context);
	this.pool.push(light);

	/*light = Light(Vector(490, 330), this.context);
	this.pool.push(light);

	light = Light(Vector(500, 334), this.context);
	this.pool.push(light);

	light = Light(Vector(510, 332), this.context);
	this.pool.push(light);

	light = Light(Vector(520, 336), this.context);
	this.pool.push(light);

	light = Light(Vector(260, 332), this.context);
	this.pool.push(light);

	light = Light(Vector(273, 334), this.context);
	this.pool.push(light);

	light = Light(Vector(285, 328), this.context);
	this.pool.push(light);

	light = Light(Vector(290, 320), this.context);
	this.pool.push(light);

	light = Light(Vector(295, 330), this.context);
	this.pool.push(light);

	light = Light(Vector(305, 335), this.context);
	this.pool.push(light);

	light = Light(Vector(315, 328), this.context);
	this.pool.push(light);

	light = Light(Vector(320, 320), this.context);
	this.pool.push(light);
	*/

	this.update();
}

Ligths.prototype.update = function () {
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
	this.context.quadraticCurveTo(this.cStart + 30, this.cEnd, this.curveEndA + 30, this.curveEndB);
	this.context.quadraticCurveTo(this.cStart + 60, this.cEnd, this.curveEndA + 65, this.curveEndB);
	this.context.stroke();
	this.context.closePath();

}

function Light(position, context) {
	if (!(this instanceof Light)) {
		return new Light(position, context);
	}

	this.context = context;
	this.position = position;
	this.currentColorIndex = randomBtween(0, 3);
	this.colors = ['#92F22A','#FF7416','#83D6DE','#E22211','yellow','#D71A75','#A0F601','#0918EC','purple'];
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
