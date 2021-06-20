const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6;
var block12, block22,slingshot,  block32, block42, block52, block62, polygon;
var gameState = "onSling";
function setup(){
    var canvas = createCanvas(2000,400);
    background(120);
    engine = Engine.create();
    world = engine.world;


stand1= new Ground(200, 305, 300, 20);
block1=new Box(200,290,30,30);
block2=new Box(230,290,30,30);
block3=new Box(170,290,30,30);
block4=new Box(185,250,30,30);
block5=new Box(215,250,30,30);
block6=new Box(200,220,30,30);

stand2= new Ground(1250, 275, 300, 20);
block12=new Box(1250,260,30,30);
block22=new Box(1280,260,30,30);
block32=new Box(1220,260,30,30);
block42=new Box(1235,220,30,30);
block52=new Box(1265,220,30,30);
block62=new Box(1250,190,30,30);
polygon=new Box1(700,290,30,30);

slingshot= new SlingShot (polygon.body, {x:700, y:20});
}
function draw(){
    Engine.update(engine);
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    stand2.display();
    block12.display();
    block22.display();
    block32.display();
    block42.display();
    block52.display();
    block62.display();
    polygon.display();
    slingshot.display();
}
function mouseDragged(){
    if (gameState==="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(polygon.body);
    }
}
