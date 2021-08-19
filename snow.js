class Snow {
    constructor(x,y){
        var options={
            density:1,
            friction:0.08,
            restitution:0.001,
            isStatic:false
}

this.image=loadImage("snowflake.png");
this.body = Bodies.circle(x,y,50,options); 
World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle; 
        var pos = this.body.position; 
        rotate(angle); 
        translate(pos.x,pos.y); 
        imageMode(CENTER);
        image (this.image,pos.x,pos.y,50,50);

    }
}