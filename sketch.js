const World=Matter.World;
const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
var engine, world, bg, snowObj1;
var snowObj2, snowObj3, snowObj4,snowObj5,snowObj6,snowObj7,snowObj8,snowObj9,snowObj10,snowObj11,snowObj12,snowObj13,snowObj14;

function preload(){
  bg=loadImage("snow1.jpg")

}

function setup() {
  createCanvas(900,600);
  engine=Engine.create();
  world=engine.world;

  snowObj1=new Snow(10,0)
  snowObj2=new Snow(200,0)
  //snowObj3=new Snow(210,0)
  
  
}

function draw() {
  background(bg);  
  Engine.update(engine);
  
  snowObj1.display();
  snowObj2.display();
  //snowObj3.display();

  
}