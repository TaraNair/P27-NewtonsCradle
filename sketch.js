
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bobDiameter = 50;
const Constraint = Matter.Constraint;

var roof, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,650,1200,20);
	roof = new Roof(500,100,600,20);

	bobObject1 = new Bob(300, 600, bobDiameter);
	bobObject2 = new Bob(350, 600, bobDiameter);
	bobObject3 = new Bob(400, 600, bobDiameter);
	bobObject4 = new Bob(450, 600, bobDiameter);
	bobObject5 = new Bob(500, 600, bobDiameter);

	rope1 = new Rope(bobObject1.body, roof.body, 50, 0)
	rope2 = new Rope(bobObject2.body, roof.body, -350, 0)
	rope3 = new Rope(bobObject3.body, roof.body, -400, 0)
	rope4 = new Rope(bobObject4.body, roof.body, 450, 0)
	rope5 = new Rope(bobObject5.body, roof.body, 500, 0)

	Engine.run(engine);
  
}


function draw() {
    Engine.update(engine);

	rectMode(CENTER);
  background(0);

  ground.display();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
//  rope1.display();
//  rope2.display();

  
  drawSprites();
 
}



