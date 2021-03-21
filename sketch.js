
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var bob1,bob2,bob3,bob4,bob5;
var roof,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//var Render=Render.create({
	//element:document.body,
	//	engine:engine,
	//options:{
	//	width:1200,
	//	height:700,
	//	wireFrames:false}
	//})
	

	//Create the Bodies Here.
roof=new Roof(425,200,400,20);
bob1=new Bob(300,600,60);
bob2=new Bob(360,600,60);
bob3=new Bob(420,600,60);
bob4=new Bob(480,600,60);
bob5=new Bob(540,600,60);
rope1=new Rope(bob1.body,roof.body,-120,0);
rope2=new Rope(bob2.body,roof.body,-60,0);
rope3=new Rope(bob3.body,roof.body,0,0);
rope4=new Rope(bob4.body,roof.body,60,0);
rope5=new Rope(bob5.body,roof.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
}

function keyPressed(){
	if(keyPressed("UP_ARROW")){
	}
}

