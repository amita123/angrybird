class Space{
    constructor(x,y,width,height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height);
        Matter.World.add(tomato,this.body);
        this.image = loadImage("sprites/base.png");
    }
    display (){
        var position =  this.body.position;
        imageMode(CENTER);
  push ();
  translate (position.x, position.y);
  rotate (this.body.angle);
  
  image(this.image, 0, 0, this.width, this.height);
  pop ();
    }
}