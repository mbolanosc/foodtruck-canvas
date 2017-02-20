function Pizza(position, context) {
  if (!(this instanceof Pizza)) {
    return new Pizza(position, context);
  }
  this.context = context;
  this.position = position;
  this.degree = 0;
  this.update();
}

Pizza.prototype.update = function() {
  this.degree += 1;
  this.render();
}

Pizza.prototype.render = function() {
  //Circle(Vector(350, 240), 60, true, '#FBCC60', true, "#EBBD63", 8, this.context);

  this.context.translate(this.position.x, this.position.y);
  this.context.rotate(toRadians(this.degree));
  this.context.fillStyle = '#FBCC60';
  this.context.strokeStyle = '#EBBD63';

  this.context.beginPath();
  this.context.arc(0, 0, 60, 0, Math.PI * 2, true);
  this.context.fill();
  this.context.stroke();
  this.context.closePath();

  //slides horizontal
  this.context.beginPath();
  this.context.strokeStyle = "#EBBD63";
  this.context.lineWidth = 2;
  this.context.moveTo(-55, 10);
  this.context.lineTo(55, -9);
  this.context.stroke();
  this.context.closePath();
  //slides vertical
  this.context.beginPath();
  this.context.strokeStyle = "#EBBD63";
  this.context.lineWidth = 2;
  this.context.moveTo(10, 58);
  this.context.lineTo(-9, -55);
  this.context.stroke();
  this.context.closePath();


  //peperonis
  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(0, 0, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(3, 15, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(6, 30, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(8, 45, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  //para arriba es con -menos
  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-2, -15, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-5, -30, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-8, -45, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();


  //horizontal
  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(15, -2, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(30, -5, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(45, -7, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-15, 2, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-30, 5, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-45, 8, 5, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  //x shape
  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-45, -15, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-32, -33, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-25, -15, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-40, 25, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-15, 25, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(-15, 45, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();
  //top derecha
  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(10, -40, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(35, -30, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(15, -20, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  //bottom derecha
  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(25, 40, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(45, 20, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.fillStyle = '#EC5B4E';
  this.context.beginPath();
  this.context.arc(25, 20, 7, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();

  this.context.resetTransform();

}
