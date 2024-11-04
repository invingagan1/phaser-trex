import Phaser from 'phaser';
export default class GameScene extends Phaser.Scene {
  player: Phaser.GameObjects.Rectangle;
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load assets here
  }

  create() {
    // Initialize game objects here
    this.cameras.main.setBackgroundColor('#3498db');

    // Create a platform at the bottom of the scene
    const platformHeight = 50;
    const platform = this.add.graphics();
    platform.fillStyle(0x8B4513, 1);
    platform.fillRect(0, this.scale.height - platformHeight, this.scale.width, platformHeight);

    const platformBody = this.add.rectangle(0, this.scale.height - platformHeight, this.scale.width, platformHeight, 0x8B4513).setOrigin(0, 0);
    this.physics.add.existing(platformBody, true);

    // Create a player on the platform
    const playerWidth = 40;
    const playerHeight = 50;
    const playerX = this.scale.width / 15 - playerWidth / 2;
    const playerY = this.scale.height - platformHeight - playerHeight;
    this.player = this.add.rectangle(playerX, playerY, playerWidth, playerHeight, 0xff0000).setOrigin(0, 0);
    this.physics.add.existing(this.player);

    // this.cameras.main.startFollow(player);

    const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
    playerBody.setCollideWorldBounds(true);
    playerBody.setGravityY(300);


    this.physics.add.collider(this.player, platformBody);


  }

  update(time: number, delta: number) {

    // Game loop logic here
    const cursors = this.input.keyboard?.createCursorKeys();

    if (cursors?.right.isDown) {
      const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
      playerBody.setVelocityX(160);
    } else {
      const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
      playerBody.setVelocityX(0);
    }
    if (cursors?.space.isDown && (this.player.body as Phaser.Physics.Arcade.Body).touching.down) {
      const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
      playerBody.setVelocityY(-330);
    }
  }
}

