window.addEventListener('load', init, false);
function init() {
  console.log('hola');
  var canvas = document.querySelector('#bannerCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  var pool = [];



  var street = Street(Vector(0, 300), ctx);
  pool.push(street);
  //
  //  this.street = Street(Vector(this.position.x, this.position.y), this.context);
  var truck = Truck(Vector(canvas.width/2 - 115, 300), ctx);
  pool.push(truck);

  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('orientationchange', resizeCanvas, false);
  resizeCanvas();
  function resizeCanvas() {
    //no es necesario
    truck.position.x = canvas.width/2 - 115;
    truck.wheell.position.x = truck.position.x + 60;
    truck.wheelr.position.x = truck.position.x + 215;
    truck.pizza.position.x = truck.position.x + 150;
    truck.ligths.position.x = truck.position.x + 20;


    street.position.x = truck.position.x + 150;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  let image = new Image(); // Create new img element
  image.src = '../sounds/tree01.png';

  image.addEventListener('load', function() {
    // execute drawImage statements here
    let tree = Tree(Vector(870, 200), image, ctx);
    pool.splice(0, 0, tree);
  }, false);

  function updatingEverything() {
    ctx.clearRect(0, 0, window.innerWidth, innerHeight);
    pool.forEach(function(item) {
      item.update();
    }, this);
    requestAnimationFrame(updatingEverything);
  }

  updatingEverything();
  var sound = new Audio("sounds/" +
  "carhorn" +
  ".wav");
  canvas.addEventListener("click", function(e) {

    if (e.clientX >= truck.position.x && e.clientX <= truck.position.x + 275 && e.clientY >= truck.position.y && e.clientY <= truck.position.y + 180) {
      console.log('HOLAA');
      //  $( "#bannerCanvas" ).addClass( "pointerClick" );
      sound.play();

    }
  });

}
