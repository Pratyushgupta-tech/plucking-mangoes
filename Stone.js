class Stone {

    constructor(x,y,width,height){
    
    var options={
    
    isStatic : true
    
      }
    
    this.Stone = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png");
    World.add(world,this.Stone);
    
     }
    
    display(){
    
    var pos=this.Stone.position
    
    push()
    
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    
    pop()
    
     }     

    }