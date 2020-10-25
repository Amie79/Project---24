class Dustbin{

constructor(x,y){

var options={
 isStatic:true
}
this.x=x;
this.y=y;
this.body=Bodies.rectangle(x,y,options);
World.add(world,this.body);
}

display(){
var pos=this.body.position;

rectMode(CENTER);
strokeWeight(5);
stroke("blue");
fill(255);
rect(x,y)
}
}