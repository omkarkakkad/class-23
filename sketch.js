const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;

var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,100,50,50);
    box2 = new Box(300,100,50,50);
    box3 = new Box(100,300,50,50);
  
    ground = new Ground(200,390,400,13);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();

    ground.display();
}