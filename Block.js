class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity=255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed>3){
        this.body.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-10
        tint(255,this.visiblity)
        
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      pop();
    }}
}