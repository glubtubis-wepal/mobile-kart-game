const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {
  kart.update();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  track.draw(ctx);
  kart.draw(ctx);

  requestAnimationFrame(loop);
}

loop();
