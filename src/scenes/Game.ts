import Phaser from 'phaser';
import { RocketLauncher } from '../assets/weapons/RocketLauncher';
import { Circle } from '../assets/weapons/enemies/Circle';
import { HomingMissile } from '../assets/weapons/HomingMissile';

export default class Demo extends Phaser.Scene {
  enemy: Circle;
  tween: any;
  text: any;
  rl: RocketLauncher;
  missile: HomingMissile;

  
  constructor() {
    super('GameScene');
  }


  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {

    
    this.enemy = new Circle(this,120,300)
    this.rl = new RocketLauncher(this,200,50,20,20,this.enemy);
    this.missile = new HomingMissile(this,100,400, 0, 14, 14, 14, 7, 0,this.enemy)


 
  }

  update() {
   this.rl.launchrocket(this.rl,this.enemy)
   // this.enemy.updatecircle()
   this.missile.update(this.enemy)
    
  }



}
