import { FacebookInstantGamesLeaderboard } from "phaser";

export class Circle extends Phaser.GameObjects.Shape {
tween;
circle;
    constructor(scene:Phaser.Scene,x,y) {
        super(scene);
        this.circle = scene.add.circle(x,y,20)
        //let weapon = scene.add.line(x,y,12,12,4,4)
        
        this.circle.setStrokeStyle(1,0x05F9FB)
    
    
   this.tween = scene.tweens.add({

        targets: this.circle,
        x: 560,
        y: 200,
        ease: 'Power1',
        duration: 3000,
        yoyo:true,
        repeat: -1
  
    });



    
    }

    updatecircle() {
    // this.enemy.setVelocity(3)
    }

}