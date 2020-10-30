class balls {
constructor(x,y,width,height) {
    var ball_abc={
        restitution:1.0
      }
      this.ball=Bodies.rectangle(x,y,width,height,ball_abc);
      World.add(world,this.ball);
      this.height=height
      this.width=width
}
display() {
    var op=this.ball.position;
    var ag=this.ball.angle;
    push() ;
    translate(op.x,op.y);
    rotate(ag);
rectMode(CENTER);
fill("red")

rect(0,0,this.width,this.height)
pop();

    }

}