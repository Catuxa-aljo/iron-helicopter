class Obstacle {
  constructor(ctx) {
    this.ctx = ctx
    this.x = this.ctx.canvas.width
    this.dist = Math.random() * 100 + 300
    this.y = Math.random() > 0.5 ? 0 - this.dist : this.dist
    this.w = Math.random() * 40 + 50
    this.h = this.ctx.canvas.height
    this.vx = -3
  }

  draw() {
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx
  }

  collide(el) {
    const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
    const collideY = el.y < this.y + this.h && el.y + el.h > this.y;

    if (collideX && collideY) {
      console.log("He chocado!")
    }
    return collideX && collideY;
  }

  isVisible() {
    return (
      this.x < this.ctx.canvas.width * 2 &&
      this.x > 0 - this.ctx.canvas.width
    )
  }
}

