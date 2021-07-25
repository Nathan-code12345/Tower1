
class polygon{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0             
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        
        
        imageMode(CENTER);
        
        pop();
        image(this.image,this.body.position.x, this.body.position.y,50,50);
      }
}
