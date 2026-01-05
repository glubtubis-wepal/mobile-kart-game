const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Camera offset
let camX = 0;
let camY = 0;

function loop() {
  kart.update();

  // Camera follows kart
  camX = kart.x - canvas.width / 2;
  camY = kart.y - canvas.height / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  // Move the canvas origin opposite to camera
  ctx.translate(-camX, -camY);

  track.draw(ctx);
  kart.draw(ctx);

  ctx.restore();

  requestAnimationFrame(loop);
}

loop();
