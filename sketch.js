const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ball;
var ball2;
var Box1;
var Box2;
var GROUND;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  Box1=new balls(120,50,50,50);
  Box2=new balls(100,200,50,50);
  GROUND=new ground(400,390,800,10);
}

function draw() {
  background("black");  
  Engine.update(engine);
 Box1.display();
 Box2.display();
 GROUND.display();
}
