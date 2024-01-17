let cnv = document.getElementById("c");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let bx = 100;
let by = 370;

let sx = 8;
let sy = 0;
let a = 0.5;

let apressed = false;
let dpressed = false;

requestAnimationFrame(draw);
function draw() {
  // ************** LOGIC ************
  // Move Player Horizontally
  if (apressed) {
    bx += -sx;
  } else if (dpressed) {
    bx += sx;
  }

  // Move Player Vertically
  sy += a; // Accelerate
  by += sy; // Move

  // Ground Landing
  if (by + 30 > cnv.height) {
    by = cnv.height - 30;
    sy = 0;
  }

  // Stop at Edges of canvas
  if (bx < 0) {
    bx = 0;
  } else if (bx > 570) {
    bx = 570;
  }

  // Wall Collision
  if (bx + 30 > 190 && bx < 410 && by + 30 > 250 && by < 285) {
    by = 220;
    sy = 0;
  }

  // *********** DRAWING ***************
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "grey";
  ctx.fillRect(190, 250, 220, 35);

  ctx.fillStyle = "blue";
  ctx.fillRect(bx, by, 30, 30);

  requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
function keydownHandler(event) {
  if (event.code == "KeyW") {
    sy = -15;
  } else if (event.code == "KeyA") {
    apressed = true;
  } else if (event.code == "KeyD") {
    dpressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "KeyA") {
    apressed = false;
  } else if (event.code == "KeyD") {
    dpressed = false;
  }
}
