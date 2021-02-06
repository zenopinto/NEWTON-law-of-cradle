const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


bob1=new Paper(300,350,50);
bob2=new Paper(350,350,50);
bob3=new Paper(400,350,50);
bob4=new Paper(450,350,50);
bob5=new Paper(500,350,50);

  ground1 = new Ground(400,100,300,40);
  sling1= new Suspender(bob1.body,ground1.body,-50*2,0);
  sling2= new Suspender(bob2.body,ground1.body,-25*2,0);
  sling3= new Suspender(bob3.body,ground1.body,-0*2,0);
  sling4= new Suspender(bob4.body,ground1.body,25*2,0);
  sling5= new Suspender(bob5.body,ground1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  background(100);

	
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-10}); } 
} 