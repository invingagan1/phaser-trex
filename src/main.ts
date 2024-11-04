import Phaser from 'phaser';
import BootScene from './scenes/boot';
import PreloadScene from './scenes/preload';
import MenuScene from './scenes/menu';
import GameScene from './scenes/game';
import GameOverScene from './scenes/game-over';

const main = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 600
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 300 },
        debug: false
      }
    },
    scene: [
      BootScene, PreloadScene, MenuScene, GameScene, GameOverScene
    ]
  };

  new Phaser.Game(config);
}

main()


