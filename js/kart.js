class Kart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.speed = 0;
    this.width = 40;
    this.height = 20;

    this.maxSpeed = 6;
    this.acceleration = 0.2;
    this.friction = 0.95;
    this.turnSpeed = 0.06;
  }

  update() {
    if (gas) this.speed += this.acceleration;
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    this.speed *= this.friction;

    if (left) this.angle -= this.turnSpeed * (this.speed / this.maxSpeed);
    if (right) this.angle += this.turnSpeed * (this.speed / this.maxSpeed);

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    track.clampKart(this);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    ctx.fillStyle = "red";
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.restore();
  }
}

// Initialize kart at start of track
const kart = new Kart(window.innerWidth / 2, window.innerHeight / 2);
