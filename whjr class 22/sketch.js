var potato, tomato, carrot, ground, apple;
var backgroundImage
function preload(){
  backgroundImage = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1000,600);
  potato=Matter.Engine.create();
  tomato=potato.world;

  ground = new Ground(500,550,1000,20);
  carrot = new Box(700,500,100,100);
  apple = new Box(900,500,100,100);
  pig1 = new Pigs(800,500);
  log1 = new Log(800,340,PI/2,300);

  carrot2 = new Box(700,300,100,100);
  apple2 = new Box(900,300,100,100);
  pig2 = new Pigs(800,300);
  log2 = new Log(800,140,PI/2,300);

  carrot3 = new Box(800,100,100,100);
  log3 = new Log(750,100,PI/3,150);
  log4 = new Log(850,100,-PI/3,150);
  bird = new Bird(200,200);
  //log5 = new Log (500, 500, PI/2, 100);
 catapult = new Catapult (bird.body, {x:100, y:50});
  
}

function draw() {
  background("white");  
  Matter.Engine.update(potato);
  ground.display();
  carrot.display();
  apple.display();
  pig1.display();
  log1.display();

  carrot2.display();
  apple2.display();
  pig2.display();
  log2.display();

  carrot3.display();
  log3.display();
  log4.display();
  bird.display();
  //log5.display();
  
  catapult.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY})
}
function mouseReleased(){
  catapult.fly();
}