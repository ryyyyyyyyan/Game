let cnv = document.getElementById("c");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let bx = 100;
let by = 370;

let wpressed = 0;
let apressed = 0;
let spressed = 0;
let dpressed = 0;

requestAnimationFrame(draw);
function draw() {
  if (wpressed) {
    by = by - 8;
  }
  if (apressed) {
    bx = bx - 8;
  }
  if (spressed) {
    by = by + 8;
  }
  if (dpressed) {
    bx = bx + 8;
  }

  if (
    by != 370 &&
    wpressed === false &&
    (by < 220 || by > 285 || bx <= 160 || bx >= 410)
  ) {
    by = by + 12;
  }
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "grey";
  ctx.fillRect(190, 250, 220, 35);

  ctx.fillStyle = "blue";
  ctx.fillRect(bx, by, 30, 30);

  if (by >= 370) {
    by = 370;
  }

  if (bx < 0) {
    bx = 0;
  }

  if (bx > 570) {
    bx = 570;
  }

  if (bx > 160 && bx < 410 && by > 220 && by < 285) {
    bx = 280;
    by = 220;
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
