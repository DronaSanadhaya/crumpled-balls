class Paper {
    constructor (x,y){
        var options={
        density:1,
        friction:1,
        restitution:0.5
        }
        this.body = Bodies.circle(x,y,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
        this.image=loadImage("paper.png")
      }

      display(){
        var pos =this.body.position;
        //pos.x=mouseX
        //pos.y=mouseY
        push()
        translate (pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("brown");
        image(this.image,0,0, this.width, this.height);
        pop()
      }
    
}   
