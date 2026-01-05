const track = {
  segments: [],
  segmentWidth: 150,
  segmentHeight: 100,
  segmentCount: 20,

  generate: function() {
    this.segments = [];

    let x = window.innerWidth / 4;
    let y = window.innerHeight / 2;

    for (let i = 0; i < this.segmentCount; i++) {
      this.segments.push({ x, y, width: this.segmentWidth, height: this.segmentHeight });

      const dx = Math.random() * 200 - 100; // move horizontally
      const dy = Math.random() * 100 - 50;  // move vertically

      x = Math.max(0, Math.min(window.innerWidth - this.segmentWidth, x + dx));
      y = Math.max(0, Math.min(window.innerHeight - this.segmentHeight, y + dy));
    }
  },

  draw: function(ctx) {
    ctx.fillStyle = "#555";
    for (let seg of this.segments) {
      ctx.fillRect(seg.x, seg.y, seg.width, seg.height);
    }
  },

  clampKart: function(kart) {
    for (let seg of this.segments) {
      if (
        kart.x > seg.x && kart.x < seg.x + seg.width &&
        kart.y > seg.y && kart.y < seg.y + seg.height
      ) return; // inside segment
    }
    // Outside all segments → push back to first segment
    const seg = this.segments[0];
    kart.x = seg.x + seg.width / 2;
    kart.y = seg.y + seg.height / 2;
  }
};

// Generate track immediately
track.generate();

// In track.js
updateSegments() {
  // Remove old segments far behind the kart
  this.segments = this.segments.filter(seg => seg.x + seg.width > kart.x - 400);

  // Add new segments ahead if needed
  const lastSeg = this.segments[this.segments.length - 1];
  if (lastSeg.x < kart.x + 1000) {
    let dx = Math.random() * 200 - 100;
    let dy = Math.random() * 100 - 50;
    let newSeg = {
      x: Math.max(0, Math.min(window.innerWidth - this.segmentWidth, lastSeg.x + dx)),
      y: Math.max(0, Math.min(window.innerHeight - this.segmentHeight, lastSeg.y + dy)),
      width: this.segmentWidth,
      height: this.segmentHeight
    };
    this.segments.push(newSeg);
  }
}

