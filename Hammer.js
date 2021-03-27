class Hammer {

    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 20,height, options);
      this.width = 150;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
    
      push();
      translate(pos.x, pos.y);
 
      rectMode(CENTER);
      
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
