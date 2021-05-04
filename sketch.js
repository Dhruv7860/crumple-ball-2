
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground (width/2,680,width,20);
paper=new Paper (100,650,70);
box1=new Box (600,450,200,200);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  box1.display()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-250});
	}
}



