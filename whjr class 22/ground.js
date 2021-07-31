class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        Matter.World.add(tomato,this.body);
    }
    display (){
        var position =  this.body.position;
        rectMode(CENTER);
  push ();
  translate (position.x, position.y);
  rotate (this.body.angle);
  fill ("brown");
  rect(0, 0, this.width, this.height);
  pop ();
    }
}