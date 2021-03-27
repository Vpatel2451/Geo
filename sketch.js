
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var engine, world;
var stone;
var hammer;
var ground;
var rubberball;


function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(700,300,70,70);
	hammer = new Hammer(760,100,150,20);
	ground = new Ground(600,height,1200,20);
  rubberball = new Rubberball(920,320,70);
	
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background('cyan');
  hammer.display()
  stone.display()
  ground.display()
  rubberball.display();
  drawSprites();
 
}



