import Phaser from 'phaser';
import { backgroundColor, title } from '../constants';
import { H1 } from '../components/ui';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    // Load assets here
  }

  create() {
    // Add menu items here
    this.cameras.main.setBackgroundColor(backgroundColor);

    const titleText = new H1(this, this.cameras.main.centerX, this.cameras.main.centerY - 100, title, '#ffffff');

    this.add.existing(titleText).setOrigin(0.5);

    const playButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Click to start', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5).setInteractive();

    playButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    //TODO: Remove this after implementing the game
    this.scene.start('GameScene');
  }

  update() {
    // Update logic here
  }
}
