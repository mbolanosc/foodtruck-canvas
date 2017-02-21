window.addEventListener('load', init, false);
function init() {
  console.log('hola');
  var canvas = document.querySelector('#bannerCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");

  var truck = Truck(Vector(200, 300), ctx);
  function updatingEverything() {

    ctx.clearRect(0, 0, window.innerWidth, innerHeight);

    truck.update();

    requestAnimationFrame(updatingEverything);
  }

  updatingEverything();
  //object.addEventListener("mouseover", myScript);
  //object.onmouseover = function(){myScript};
  //se lo puse al canvas no al truck
  canvas.addEventListener("click", function (e) {

    if (e.clientX >= truck.position.x &&
      e.clientX <= truck.position.x + 275 &&
      e.clientY >= truck.position.y &&
      e.clientY <= truck.position.y + 180) {
      console.log(e);
    }
  });

}
