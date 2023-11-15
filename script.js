let cnv = document.getElementById("c");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let bx = 150;
let by = 100;

let wpressed = 0;
let apressed = 0;
let spressed = 0;
let dpressed = 0;

requestAnimationFrame(draw);
function draw() {
  if (wpressed) {
    by = by - 2;
  }
  if (apressed) {
    bx = bx - 2;
  }
  if (spressed) {
    by = by + 2;
  }
  if (dpressed) {
    bx = bx + 2;
  }
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "grey";
  ctx.fillRect(400, 100, 40, 200);

  ctx.fillStyle = "blue";
  ctx.fillRect(bx, by, 70, 70);

  if ((bx >= 330) & (bx <= 440) & (by >= 30) & (by <= 300)) {
    bx = 150;
    by = 100;
  }

  requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
function keydownHandler(event) {
  if (event.code == "KeyW") {
    wpressed = true;
  } else if (event.code == "KeyA") {
    apressed = true;
  } else if (event.code == "KeyS") {
    spressed = true;
  } else if (event.code == "KeyD") {
    dpressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "KeyW") {
    wpressed = false;
  } else if (event.code == "KeyA") {
    apressed = false;
  } else if (event.code == "KeyS") {
    spressed = false;
  } else if (event.code == "KeyD") {
    dpressed = false;
  }
}
