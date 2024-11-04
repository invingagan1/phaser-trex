import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    
  }

  create() {
    // Start the next scene
    this.scene.start('PreloadScene');
  }
}
