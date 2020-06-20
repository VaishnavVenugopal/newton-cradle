class roof{
    constructor(x, y) {
        var options = {
            'isStatic': true,
            
            
        }
        this.body = Bodies.rectangle(x, y,1000,10,options);      
        World.add(world, this.body);
      } 
      display(){
       push();
       translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER);
        rect( 0,0,1000,10 );
        pop();
       
      }
}