import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load assets here
  }

  create() {
    // Initialize game objects here
  }

  update(time: number, delta: number) {
    // Game loop logic here
  }
}
