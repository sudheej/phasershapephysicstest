

export class RocketLauncher extends Phaser.GameObjects.Shape {
enemy;
weapon:Phaser.GameObjects.Shape;
    constructor(scene:Phaser.Scene,x,y,l,b,enemy:Phaser.GameObjects.Shape) {
        super(scene,x,y);
        let hull = scene.add.rectangle(x,y,l,b)
        //let weapon = scene.add.line(x,y,12,12,4,4)
        let distancefromenemy = Phaser.Math.Distance.Between(x,y,enemy.circle.x,enemy.circle.y)
        this.weapon = scene.add.line(x,y,distancefromenemy,0,0,0)
        
        this.weapon.setOrigin(0,0)
        
      
        this.weapon.setStrokeStyle(1,0x05F9FB)
        console.log("------------")
        console.log(x)
     
      // this.weapon.rotation = Phaser.Math.Angle.Between(x,y,enemy.circle.x + scene.cameras.main.scrollX,enemy.circle.y + scene.cameras.main.scrollY)
        //this.weapon.angle = -180
        hull.setStrokeStyle(1,0x05F9FB)
        this.enemy = enemy
    }
    
    launchrocket(player:Phaser.GameObjects.Shape,enemy:Phaser.GameObjects.Shape) {
        if (player) {

            let distancefromenemy = Phaser.Math.Distance.Between(player.weapon.x,player.weapon.y,enemy.circle.x,enemy.circle.y)
            this.weapon.rotation = Phaser.Math.Angle.Between(player.weapon.x,player.weapon.y,enemy.circle.x + this.scene.cameras.main.scrollX,enemy.circle.y + this.scene.cameras.main.scrollY)
            this.weapon.setTo(0,0,distancefromenemy,0)
            
            console.log(distancefromenemy)

        }
     
    }


}