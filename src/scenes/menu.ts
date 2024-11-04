import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    // Load assets here
  }

  create() {
    // Add menu items here
    const title = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Game Title', {
      fontSize: '64px',
      color: '#ffffff'
    }).setOrigin(0.5);

    const playButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Play', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();

    playButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }

  update() {
    // Update logic here
  }
}
