import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {
    // Load any assets needed for the game over screen here
  }

  create() {
    // Add game over text
    const gameOverText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Game Over',
      { fontSize: '64px', fill: '#fff' }
    );
    gameOverText.setOrigin(0.5);

    // Add restart instruction text
    const restartText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 100,
      'Press SPACE to Restart',
      { fontSize: '32px', fill: '#fff' }
    );
    restartText.setOrigin(0.5);

    // Add input listener for restarting the game
    this.input.keyboard.on('keydown-SPACE', () => {
      this.scene.start('GameScene'); // Replace 'GameScene' with your main game scene key
    });
  }
}
