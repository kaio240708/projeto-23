
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tabua;
var broco1;
var broco2;
var vent1;
var vent2;
var vent3;
var bola1;
var bola2;
var bola3;
var engine,world;
var angle1=30;
var angle2=40;
var angle3=50;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);

	



	engine = Engine.create();
	world = engine.world;
   
	//Crie os Corpos aqui.
var tabua_options= {
	isStatic: true
}
var broco1_options= {
	isStatic: true
}
var broco2_options= {
	isStatic: true
}
var vent1_options= {
	isStatic: true
}
var vent2_options= {
	isStatic: true
}
var bola1_options= {
	
	restitution:0.4,
	friction:0.02
}

	tabua=Bodies.rectangle(300,height,600,30, tabua_options);
	World.add(world,tabua)

    broco1=Bodies.rectangle(100,400,150,30,broco1_options);
    World.add (world,broco1);

    broco2=Bodies.rectangle(460,400,150,30,broco2_options);
    World.add (world,broco2);

	vent1=Bodies.rectangle(280,200,100,20,vent1_options);
	World.add(world,vent1);

	vent2=Bodies.rectangle(280,200,100,20,vent2_options);
	World.add(world,vent2);

	vent3=Bodies.rectangle(280,200,100,20,vent2_options);
	World.add(world,vent3);


	bola1= Bodies.circle(270,10,10,bola1_options);
	World.add(world,bola1);

	bola2= Bodies.circle(270,10,10,bola1_options);
	World.add(world,bola2);

	bola3= Bodies.circle(270,10,10,bola1_options);
	World.add(world,bola3);

rectMode(CENTER);

}


function draw() {
 
  background("green");
  Engine.update(engine);
 //rect(tabua.position.x,tabua.position.y,600,30);
     rect(broco1.position.x,broco1.position.y,150,30);
     rect(broco2.position.x,broco2.position.y,150,30);
	    // rect(vent1.position.x,vent1.position.y,180,20);
	    // rect(vent2.position.x,vent2.position.y,20,180);
		 ellipse(bola1.position.x,bola1.position.y,40);
		 ellipse(bola2.position.x,bola2.position.y,40);
		 ellipse(bola3.position.x,bola3.position.y,40);

		 Matter.Body.rotate(vent1,angle1);
		 push();
		 translate(vent1.position.x,vent1.position.y);
		 rotate(angle1);
		 rect(0,0,180,20);
		 pop();
		 angle1 +=4;

		 Matter.Body.rotate(vent2,angle2);
		 push();
		 translate(vent2.position.x,vent2.position.y);
		 rotate(angle2);
		 rect(0,0,180,20);
		 pop();
		 angle2 +=4.8;

		 Matter.Body.rotate(vent3,angle3);
		 push();
		 translate(vent3.position.x,vent3.position.y);
		 rotate(angle3);
		 rect(0,0,180,20);
		 pop();
		 angle3 +=5;
 
  


}



