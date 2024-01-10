let cnv = document.getElementById("c");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let bx = 130;
let by = 250;
let ox = 450;
let oy = 280;

requestAnimationFrame(draw);
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(bx, by, 20, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(ox, oy, 50, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(draw);
}

// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  let X = Math.round(event.clientX - cnvRect.left);
  let Y = Math.round(event.clientY - cnvRect.top);
  bx = X;
  by = Y;

  let or = Math.sqrt(Math.abs(X - ox) ** 2 + Math.abs(Y - oy) ** 2);

  if (or < 70) {
    ox = Math.floor(Math.random() * 600);
    oy = Math.floor(Math.random() * 400);
  }
}
