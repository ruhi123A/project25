const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;
var dustbinObj,dustbinimg;

function preload(){
  dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
  paper = new Paper(50,520, 40);
 dustbin = createSprite(1000,490,20,20);
 dustbin.addImage(dustbinimg);
 dustbin.scale = 0.6;
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(600,643,1200,100,ground_options);
  World.add(world,ground);
  ground = createSprite(600,643,1200,120)
  dustbin1 = new Dustbin(940,532,15,130);
  dustbin3 = new Dustbin(1055,532,15,130);
	dustbin2 = new Dustbin(1048,590,230,15);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  background("yellow");
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}
function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paper.body, paper.body.position, {x: 194, y: -195});

  } 

}