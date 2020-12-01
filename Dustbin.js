class Dustbin{
construtor(x,y,width,height)
varoptions={
isStatic=false
}
this.body=Bodies.rectangle(x,y,width,heigth,options)
this.height=height;
this.width=width;
World.add(world,this.body)

display(){
var pos=this.body.position
rect(0,0,this.width,this.height)
}
}