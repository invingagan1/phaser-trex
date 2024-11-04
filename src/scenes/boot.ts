import Phaser from 'phaser';
import { backgroundColor } from '../constants';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    
  }

  create() {
    // Start the next scene
    this.cameras.main.setBackgroundColor(backgroundColor);
    this.scene.start('PreloadScene');
  }
}
