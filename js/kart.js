class Kart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;      // Rotation
    this.speed = 0;      // Current speed
    this.width = 40;
    this.height = 20;

    this.maxSpeed = 6;   // Maximum forward speed
    this.acceleration = 0.2;
    this.friction = 0.95;
    this.turnSpeed = 0.06;
  }

  update() {
    // Accelerate
    if (gas) this.speed += this.acceleration;
    // Cap speed
    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;

    // Friction
    this.speed *= this.friction;

    // Turning based on current speed
    if (left) this.angle -= this.turnSpeed * (this.speed / this.maxSpeed);
    if (right) this.angle += this.turnSpeed * (this.speed / this.maxSpeed);

    // Move kart
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Keep inside track
    track.clampKart(this);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    // Draw kart body
    ctx.fillStyle = "red";
    ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);

    // Optional: simple wheels
    ctx.fillStyle = "black";
    ctx.fillRect(-this.width/2, -this.height/2 - 5, 10, 5); // front-left
    ctx.fillRect(this.width/2 - 10, -this.height/2 - 5, 10, 5); // front-right
    ctx.fillRect(-this.width/2, this.height/2, 10, 5); // back-left
    ctx.fillRect(this.width/2 - 10, this.height/2, 10, 5); // back-right

    ctx.restore();
  }
}

// Initialize kart at start of track
const kart = new Kart(window.innerWidth / 2, window.innerHeight / 2);
