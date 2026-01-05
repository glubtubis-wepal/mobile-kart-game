const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Initialize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Main loop
function loop() {
  // Update
  kart.update();

  // Draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  track.draw(ctx);
  kart.draw(ctx);

  requestAnimationFrame(loop);
}

loop();
