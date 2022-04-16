export class HomingMissile {
rocket:Phaser.GameObjects.Shape
turnDegreesPerFrame = 1.25
speed = 1
    constructor(scene:Phaser.Scene,x,y,x1,y1,x2,y2,x3,y3,enemy) {
        //var r1 = scene.add.triangle(200, 200, 0, 148, 148, 148, 74, 0, 0x6666ff);
        this.rocket = scene.add.triangle(x,y,x1,y1,x2,y2,x3,y3,0x6666ff)

    }

    update(enemy) {

        const targetAngle = Phaser.Math.Angle.Between(
            this.rocket.x, this.rocket.y,
            enemy.circle.x, enemy.circle.y
        )
        let diff = Phaser.Math.Angle.Wrap(targetAngle - this.rocket.rotation)
        console.log(diff)

        // set to targetAngle if less than turnDegreesPerFrame
	if (Math.abs(diff) < Phaser.Math.DegToRad(this.turnDegreesPerFrame))
	{
		this.rocket.rotation = targetAngle;
	}
	else
	{
		let angle = this.rocket.angle
		if (diff > 0)
		{
			// turn clockwise
			angle += this.turnDegreesPerFrame
		}
		else
		{
			// turn counter-clockwise
			angle -= this.turnDegreesPerFrame
		}
		
		this.rocket.setAngle(angle)
	}
    // move missile in direction facing
	const vx = Math.cos(this.rocket.rotation) * this.speed
	const vy = Math.sin(this.rocket.rotation) * this.speed

	//this.body.velocity.x = vx
	//this.body.velocity.y = vy
    console.log(vx)
    this.rocket.setX(this.rocket.x + vx)
    this.rocket.setY(this.rocket.y + vy)

        //this.rocket.setX(this.rocket.x + 1)
    }


}