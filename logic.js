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
    truck.update();
    requestAnimationFrame(updatingEverything);
  }
  updatingEverything();
  //object.addEventListener("mouseover", myScript);
  //object.onmouseover = function(){myScript};
  //se lo puse al canvas no al truck
  canvas.addEventListener("mouseover", function() {
    console.log('hover');
  });
}
