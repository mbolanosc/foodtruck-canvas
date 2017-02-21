function Tree(position, img, context) {
    if (!(this instanceof Tree)) {
        return new Tree(position, img, context);
    }
    this.speed = Vector(-0.9, 0);
    this.position = position;
    this.context = context;
    this.img = img;   // Create new img element
}

Tree.prototype.update = function () {
    this.position.add(this.speed);
    this.checkBounderies();
    this.render();
}

Tree.prototype.render = function () {
    this.context.drawImage(this.img, this.position.x, this.position.y, 150, 200);
}

Tree.prototype.checkBounderies = function () {
    if (this.position.x < -145) {
        this.position.x = window.innerWidth;
    }
}
