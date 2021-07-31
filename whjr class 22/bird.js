class Bird extends Space{
    constructor(x,y){
       super(x, y, 50, 50);
       this.image = loadImage("sprites/bird.png");
       Matter.Body.setDensity(this.body, 5);
    }
    display (){
        var position =  this.body.position;
        //position.x = mouseX;
        //position.y = mouseY;
        super.display();
    }
}