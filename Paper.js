class Paper {
    constructor() {
      var options = {
         isStatic:false,
          restitution:1,
         friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(100,100,20,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper1.png");

    
      World.add(world,this.body);
    }
   
     
    display()
    { 
      var pos=this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,40,40);
     //ellipseMode(RADIUS);
     // ellipse(this.body.position.x,this.body.position.y,20,20);
      pop();
      
    }
  }
  