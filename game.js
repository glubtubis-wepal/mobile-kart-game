const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Kart
const kart = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  angle: 0,
  speed: 0
};

// Input
let left = false;
let right = false;
let gas = false;

document.getElementById("left").ontouchstart = () => left = true;
document.getElementById("left").ontouchend = () => left = false;

document.getElementById("right").ontouchstart = () => right = true;
document.getElementById("right").ontouchend = () => right = false;

document.getElementById("gas").ontouchstart = () => gas = true;
document.getElementById("gas").ontouchend = () => gas = false;

function update() {
  if (gas) kart.speed += 0.2;
  kart.speed *= 0.98;

  if (left) kart.angle -= 0.05;
  if (right) kart.angle += 0.05;

  kart.x += Math.cos(kart.angle) * kart.speed;
  kart.y += Math.sin(kart.angle) * kart.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(kart.x, kart.y);
  ctx.rotate(kart.angle);

  ctx.fillStyle = "red";
  ctx.fillRect(-20, -10, 40, 20);

  ctx.restore();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
