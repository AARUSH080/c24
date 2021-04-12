const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world; 
var box1;
var box2;
var ground1;

function setup() {
  createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
box1=new box(700,320,70,70);
box2=new box(920,320,70,70);
box3=new box(700,240,70,70);
box4=new box(920,240,70,70);

ground1=new ground(600,height,1200,20)

pig1=new pig(810,210)
pig2=new pig(810,350)

log1=new log(810,180,300,PI/2)
log2=new log(810,260,300,PI/2)
log3=new log(760,120,150,PI/7)
log4=new log(870,120,150,-PI/7)
bird1=new bird(100,100)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  bird1.display();
  log3.display();
  log4.display();

}