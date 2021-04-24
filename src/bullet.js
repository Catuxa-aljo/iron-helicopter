class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.vx = 15
    this.r = 2
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.x,
      this.y,
      this.r,
      0,
      2 * Math.PI
    )
    // TODO: draw circle
    this.ctx.closePath()
  }

  move() {
    this.x += this.vx
    // TODO: move circle
  }

  isVisible() {
   
    return this.x < this.ctx.canvas.width

    // TODO: is inside canvas?
  }
}