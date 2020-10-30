class ground{
    constructor(x,y,width,height) {
var ground_abc= {
    isStatic:true
}
this.ground2= Bodies.rectangle(x,y,width,height,ground_abc);
this.width=width;
this.height=height;
World.add(world,this.ground2)
    }
display() {
    fill("white")
rectMode(CENTER)
rect(this.ground2.position.x,this.ground2.position.y,this.width,this.height)

}

}
