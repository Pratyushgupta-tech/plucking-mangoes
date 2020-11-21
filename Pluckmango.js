class Pluck{

constructor(bodyA,pointB){

const Constraint = Matter.Constraint

    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }

this.pointB = pointB;
this.pluck = Constraint.create(options);
World.add(world,this.pluck);

 }

fly(){

this.pluck.bodyA=null;

  }

display(){

if(this.pluck.bodyA){

pointA = this.pluck.bodyA.position;
pointB = this.pointB;



line(pointA.x , pointA.y , pointB.x , pointB.y)



  } 

 }

} 