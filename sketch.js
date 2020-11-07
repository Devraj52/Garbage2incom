
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var garbage

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	garbage=new Garbage(200,500,20,20);
	ground=new Ground(400,550,1200,10)
	dustbin1=new Dustbin(700,520,15,100);
	dustbin2=new Dustbin(850,520,15,100);
	dustbin3=new Dustbin(775,500,150,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  garbage.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(garbage1.body,dustbin3.body.position,{x:40,y:-40}); 
}
 }


