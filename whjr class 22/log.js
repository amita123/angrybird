class Log extends Space{
    constructor(x,y,angle,height){
       super(x, y ,20, height, angle);
       this.image = loadImage("sprites/wood2.png");
       Matter.Body.set(this.body, "friction", 1);
        Matter.Body.setAngle(this.body, angle);
    }
   
}