class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.band = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.band);
    }

    fly(){
        this.band.bodyA = null;
    }
    attach(body){
        this.band.bodyA=body
        
    }
    display(){
        if(this.band.bodyA){
        var pointA = this.band.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}