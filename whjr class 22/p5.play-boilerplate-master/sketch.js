var rect1, rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor = "blue";
  rect2 = createSprite(300, 200, 40,60);
  rect2.shapeColor = "yellow";
}

function draw() {
  background(0); 
  rect2.x = mouseX;
  rect2.y = mouseY;
  var criteria1 = rect1.width/2 + rect2.width/2;
  var criteria2 = rect1.height/2 + rect2.height/2;
  if(rect2.x - rect1.x <=criteria1 && 
    rect1.x - rect2.x <=criteria1 &&
    rect2.y - rect1.y <=criteria2 &&
    rect1.y - rect2.y <=criteria2){
      rect1.shapeColor="red";
      rect2.shapeColor="red"; 
    } else {
      rect1.shapeColor = "blue";
      rect2.shapeColor = "yellow";
    }
  drawSprites();
}