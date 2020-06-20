class SlingShot{
    constructor(bodyA, bodyB,offsetX,offsety){
        
        this.offsetx=offsetX;
        this.offsety=offsety;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length:200,
            stiffness:0.04,
            pointB:{x:this.offsetx,y:this.offsety}
            
        }
       
        this.sling = Matter.Constraint.create(options);
        
        World.add(world, this.sling);
        
    }
    display()
    {
        var pointa=this.sling.bodyA.position;
        var pointb=this.sling.bodyB.position;
        strokeWeight(8);
        var anchor1x=pointb.x;
        var anchor1y=pointb.y;

        var anchor2x=pointa.x+this.offsetx;
        var anchor2y=pointa.y+this.offsety;
        stroke("white");

        line(anchor1x,anchor1y,anchor2x,anchor2y)
    }
}

    
