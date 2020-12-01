class Paper {
constructor(x,y)
varoptions = {
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
 };
 
 this.body = Bodies.ellipse(x, y, 50, 50, options);
 this.width=50;
 this.height=50;
 World.add(world,this.body)

function keyPressed(){
    if (keyCoed===UP_ARROW){
Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
display(){
var pos = this.body.position;
}
    }
}

};
