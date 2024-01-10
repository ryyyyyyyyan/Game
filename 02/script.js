let cnv = document.getElementById("c");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let rx = 130;
let ry = 70;
let gx = 450;
let gy = 100;
let bx = 130;
let by = 250;
let ox = 450;
let oy = 280;

requestAnimationFrame(draw);
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "red";
  ctx.fillRect(rx, ry, 150, 60);

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(gx, gy, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "blue";
  ctx.fillRect(bx, by, 150, 60);

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
  let gr = Math.sqrt(Math.abs(X - gx) ** 2 + Math.abs(Y - gy) ** 2);
  let or = Math.sqrt(Math.abs(X - ox) ** 2 + Math.abs(Y - oy) ** 2);

  if (X > rx && X < rx + 150 && Y > ry && Y < ry + 70) {
    document.body.style.backgroundColor = "red";
    rx = Math.floor(Math.random() * 600);
    ry = Math.floor(Math.random() * 400);
  }

  if (X > bx && X < bx + 150 && Y > by && Y < by + 70) {
    document.body.style.backgroundColor = "blue";
    bx = Math.floor(Math.random() * 600);
    by = Math.floor(Math.random() * 400);
  }

  if (gr < 50) {
    document.body.style.backgroundColor = "green";
    gx = Math.floor(Math.random() * 600);
    gy = Math.floor(Math.random() * 400);
  }

  if (or < 50) {
    document.body.style.backgroundColor = "orange";
    ox = Math.floor(Math.random() * 600);
    oy = Math.floor(Math.random() * 400);
  }
}
