class Bob{
    constructor(x, y, width){


        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.width = width;
        this.body = Bodies.circle(x, y, width / 3, options);

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        fill(255);
        imageMode(CENTER);
        ellipse(pos.x, pos.y, this.width);
        pop();
    }
}