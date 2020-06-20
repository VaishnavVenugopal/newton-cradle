  class Bob{
    constructor(x, y,radius) {
        var options = {
           
          restitution : 1.0,
          density : 1.0
        
            
             
            
        }
        this.body = Bodies.circle(x, y, radius, options);
       this.radius = radius;
        World.add(world, this.body);
       
      } 
      display(){
       
        ellipseMode(RADIUS);
        fill(128,0,128);
        ellipse( this.body.position.x,this.body.position.y,this.radius );
        console.log(this.body);
       
      }
}