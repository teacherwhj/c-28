class Paper{
constructor(x,y,r){
    var options ={
        isStatic: false,
        restitution: 0.3,
        friction: 1,
        density: 1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,60,options);
    World.add(world,this.body);
    this.image =loadImage("paper.png");
    
}
display(){
    var pos=this.body.position;
    push()
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    //ellipse(0,0,20,20);
    image(this.image,0,0,this.r, this.r);
    
    pop();
}



}