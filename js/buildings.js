function Buildings(position, context) {
  if (!(this instanceof Buildings)) {
    return new Buildings(position, context);
  }
  this.context = context;
  this.position = position;
  this.speed = Vector(-0.9, 0);

  //this.allWindows = [];

	//let window = Windows(Vector(this.position.x + 100, this.position.y), this.context);
	//this.pool.push(light);

  this.update();
}

Buildings.prototype.update = function() {
  this.position.add(this.speed);
  this.render();
}
Buildings.prototype.render = function() {
  this.context.beginPath();
  this.context.fillStyle = '#A0B58D';
  this.context.rect(this.position.x + 145, this.position.y + 20, 150, -500);
	//this.context.rect(this.position.x + 450, this.position.y + 20, 150, -350);
	this.context.rect(this.position.x + 750, this.position.y + 20, 150, -450);
  this.context.fill();
  this.context.closePath();
}
