import Phaser from 'phaser';
import { spriteSheets } from '../utils';
export default class GameScene extends Phaser.Scene {
  velocity = 50;
  
  player!: Phaser.GameObjects.Sprite;
  star!: Phaser.GameObjects.Sprite;
  scrollable !: Phaser.GameObjects.TileSprite;
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load assets here

    // Add a player from spritesheet
    this.cameras.main.setBackgroundColor('#3498db');
    this.star =  this.add.sprite(100, 100, spriteSheets.HUD, 0).setDisplaySize(32, 32).setOrigin(0, 0);

    this.add.sprite(100, 150, spriteSheets.GROUND, 0).setDisplaySize(32, 32).setOrigin(0, 0);
    this.player = this.add.sprite(100, 200, spriteSheets.PLAYERS, 0).setDisplaySize(32, 64).setOrigin(0, 0);

    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor('#FF98db');
    


    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers(spriteSheets.PLAYERS, { start: 0, end: 1 }),
      frameRate: 4,  
      repeat: -1
    })

    this.anims.create({
      key: 'fill',
      frames: this.anims.generateFrameNumbers(spriteSheets.HUD, { 
        frames:[0,10]
      }),
      frameRate: 2,  
      repeat: -1
    })

    this.player.anims.play('walk', true);
    this.star.anims.play('fill', true);


    // this.cameras.main.startFollow(this.player);

    // Create the scrollable tilesprite

    // this.scrollable = this.add.tileSprite(0, this.scale.height, 800, 64, spriteSheets.GROUND, 8).setOrigin(0,1);


  }

  create() {

  }

  update(_time: number, delta: number) {
    // Update logic here
    // this.player.x += this.velocity / 60;
    // this.scrollable.tilePositionX += this.velocity / 60;
  }
}

