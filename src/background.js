class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "https://image.freepik.com/free-vector/sky-day-game-background_7814-306.jpg"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    )
    // TODO: draw image

    // TODO: draw image again on the right
  }

  move() {

    this.x += this.vx;
    if (this.x + this.w <= 0){
      this.x = 0
    }
    // TODO: move background
    // TODO: restart position if out of canvas
  }
}