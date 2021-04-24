class Score{
    constructor(ctx) {
        this.ctx = ctx
    }

    draw() {
        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "left";
        this.ctx.fillText(
            "SCORE",
            20,
            20,
        );
    }
    
}