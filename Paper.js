class Paper{
	constructor(x,y,r)
	{
		var options = {
			restitution: 0.3,
            density:1.2,
            friction:0
		   
			
		}
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			imageMode(RADIUS);
                fill(100);
                    image(this.image,2,2,this.r,this.r);

			pop()
	}

}