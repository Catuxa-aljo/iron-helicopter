class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
    this.score = new Score(ctx)
  }

  start() {
    // TODO: loop. clear, draw, move, addObstacle, checkCollisions, clearObstacles
    this.intervalId = setInterval(() =>{
      this.clear();
      this.move();
      this.draw()
      this.addObstacle()
      console.log(this.obstacles)
      if (this.tick++ > 10000) {
        this.tick = 0;
      }
      this.checkCollisions()
    }, 1000 /60)

    
  }

  clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
    this.obstacles = this.obstacles.filter(ob => ob.isVisible())
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks!!
    if (this.tick % 100) {
      return
    }
    this.obstacles.push(new Obstacle(this.ctx));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.clearObstacles()
  }

  draw() {
    this.bg.draw()
    this.helicopter.draw()
    this.obstacles.forEach( ob => ob.draw())
    this.score.draw()

    // TODO: draw everything
  }

  move() {
    // TODO: move everything
    this.bg.move()
    this.helicopter.move()
    this.obstacles.forEach( ob => ob.move());
  }

  checkCollisions() {
    const collision = this.obstacles.some( ob => ob.collide(this.helicopter));
    if (collision || this.helicopter.isFloor()) {
      this.gameOver();
      
    }

  
    // TODO: check helicopter on floor?
    // TODO: iterate obstacles. check colX and colY
  }

  onKeyEvent(event) {
    // TODO
  }

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}