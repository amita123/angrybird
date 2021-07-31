class Catapult {
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            stiffness: 0.2,
            length: 10
          }
          this.catapult = Matter.Constraint.create(options);
   Matter.World.add(tomato,this.catapult); 
    }
   display(){
       if(this.catapult.bodyA !== null){
        var point1=this.catapult.bodyA.position
       var point2=this.catapult.pointB
    push ();
    strokeWeight(3);
    stroke ("black");
    line (point1.x, point1.y, point2.x, point2.y);
    pop ();
       }
       
   }
    fly(){
        this.catapult.bodyA = null
    }
    
    
}