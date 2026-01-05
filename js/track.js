// Track definition
const track = {
  x: window.innerWidth / 4,
  y: window.innerHeight / 4,
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,

  draw: function(ctx) {
    ctx.fillStyle = "#555";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
