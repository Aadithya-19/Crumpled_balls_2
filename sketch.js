const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Body = Matter.Body;

var Paper, paperImg;
var dustbinImg
var engine, world;

function setup() {

  var canvas = createCanvas(1600, 400);

  engine = Engine.create();
  world = engine.world;

//For the ground 

  groundSprite=new Ground(width/2, height-35, width,10);
	// groundSprite.shapeColor=color(255)

//for the circle paper


  Paper = new paper(200, 200, 70, 70);

  //For the dustbin
  
  // trash1 = createSprite(860, 350, 200, 20);
  // trash2 = createSprite(780, 240, 20, 200);
  // trash3 = createSprite(940, 240, 20, 200);

   trashObj = new dustbin(950, 350);

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  fill(255);
  groundSprite.display(); 
  trashObj.display();
  Paper.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    
   Matter.Body.applyForce(Paper.body, Paper.body.position, {x:75, y:-605});
   
   }
 }