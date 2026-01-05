// Kart object
const kart = {
  x: 0,
  y: 0,
  angle: 0,
  speed: 0,
  width: 40,
  height: 20,

  update: function() {
    if (gas) this.speed += 0.2;
    this.speed *= 0.95;

    if (left) this.angle -= 0.05;
    if (right) this.angle += 0.05;

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Keep inside track
    this.x = Math.max(track.x, Math.min(track.x + track.width, this.x));
    this.y = Math.max(track.y, Math.min(track.y + track.height, this.y));
  },

  draw: function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = "red";
    ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
    ctx.restore();
  }
};

