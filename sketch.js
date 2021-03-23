var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(380,230, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 var packageSprite_options ={ 
        restitution: 1.0 }

	 packageSprite = Bodies.rectangle(380,200,10,10,packageSprite_options);
	 World.add(world, packageSprite);
	 packageSprite.scale=0.2
	 


	Engine.run(engine);
  
}


function draw() {
	background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
	rect(packageSprite.position.x,packageSprite.position.y,25,25);
  drawSprites();
 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.velocityY = -10

    
  }
}



