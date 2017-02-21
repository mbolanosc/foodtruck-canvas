function Street(position, context) {
  if (!(this instanceof Street)) {
    return new Street(position, context);
  }
  this.context = context;
  this.position = position;
  this.speed = Vector(-1, 0);
  this.currentColor = 'black';
  this.lines = [];

  this.background = Rectangle(Vector(this.position.x, this.position.y + 90), window.innerWidth, 300, true, this.currentColor, false, 'none', 0, this.context);

  for (var index = 0; index < window.innerWidth; index += 100, 150) {
    //rayitas
    let line = Rectangle(Vector(this.position.x + index, this.position.y + 210), 50, 10, true, 'yellow', false, 'none', 0, this.context);
    this.lines.push(line);
  }
}

Street.prototype.update = function() {
  this.render();
  this.lines.forEach(function(line) {

    if (line.position.x < -80) {
      line.position.x = window.innerWidth;
    }

    line.position.add(this.speed);
    line.update();
  }, this);
}

Street.prototype.render = function() {
  this.background.render();
}
