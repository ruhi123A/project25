class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 50;
      this.image = loadImage("paper.png")
      this.body.scale = 30;
      World.add(world, this.body);
    }
    display(){
      fill("purple");
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
  };
