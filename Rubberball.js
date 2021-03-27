class Rubberball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, radius, options);
     this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      
     rectMode(CENTER);
    
      rect(0, 0, this.radius);
      pop();
    }
  };