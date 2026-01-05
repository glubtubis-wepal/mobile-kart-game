// Track object with procedural generation
const track = {
  segments: [],
  segmentWidth: 150,
  segmentHeight: 100,
  segmentCount: 20,

  generate: function() {
    this.segments = [];

    // Start position
    let x = window.innerWidth / 4;
    let y = window.innerHeight / 2;

    for (let i = 0; i < this.segmentCount; i++) {
      this.segments.push({ x, y, width: this.segmentWidth, height: this.segmentHeight });

      // Randomly move next segment
      const dx = Math.random() * 200 - 100; // -100 to 100
      const dy = Math.random() * 100 - 50;  // -50 to 50

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

  // Check kart bounds (keep inside track)
  clampKart: function(kart) {
    for (let seg of this.segments) {
      if (
        kart.x > seg.x && kart.x < seg.x + seg.width &&
        kart.y > seg.y && kart.y < seg.y + seg.height
      ) {
        // Kart is inside a segment → fine
        return;
      }
    }
    // Kart outside all segments → push back to nearest segment
    const nearest = this.segments[0];
    kart.x = nearest.x + nearest.width/2;
    kart.y = nearest.y + nearest.height/2;
  }
};

// Generate the track at the start
track.generate();
