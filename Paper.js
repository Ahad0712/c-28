class Paper{
    constructor(x,y,width,height){
        var option = {
            isStatic:flase,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body.ellipse(56, 46, 55, 55);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
    }
