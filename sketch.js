
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbinObj,groundObject	
var engine,world;
var ball;
var launcher;
function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ball = new Paper(200,450,70);
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(1200,550);
	launcher = new Launcher(ball.body,{x:200,y:300});

	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  ball.display();
  groundObject.display();
  dustbinObj.display();
  launcher.display();   
}
 

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-15});
	}
}