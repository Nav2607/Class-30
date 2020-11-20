class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibilty = 255
    this.image = loadImage("sprites/enemy.png");
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<2.5){
      super.display();
    
    }else{
      push()
      World.remove(world,this.body)
      this.visibilty = this.visibilty -5
      tint(255,this.visibilty)
      image(this.image,this.body.position.x,this.body.position.y,this.width, this.height)
      pop()
    }

  }
};