import Phaser from 'phaser';
import { images } from './../utils'
import { backgroundColor, title } from '../constants';
import { H1 } from '../components/ui';


export default class PreloadScene extends Phaser.Scene {
  private loadingBar!: Phaser.GameObjects.Graphics;
  private progressBar!: Phaser.GameObjects.Graphics;

  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(): void {
    this.cameras.main.setBackgroundColor(backgroundColor);

    this.createLoadingBar();

    this.load.on('progress', (value: number) => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0xff00ff, 1);
      const padding = 4;
      this.progressBar.fillRect(
        this.cameras.main.width / 4 + padding,
        this.cameras.main.height / 2 - 16 + padding,
        (this.cameras.main.width / 2 - padding * 2) * value,
        32 - padding * 2
      );
    });

    this.load.on('complete', () => {
      this.scene.start('MenuScene');
    });

    // Load assets here

    Object.entries(images).forEach(([_, value]) => {
      this.load.image(value, value);
    });
    // TODO: Enable this after adding audio files
    // audios.forEach((value, key) => {
    //   this.load.audio(key, value);
    // });

    this.load.image('example', 'assets/example.png');

    const { width, height } = this.cameras.main;

    const titleComponent = new H1(this, width / 2, height / 2 - 100, title);
    this.add.existing(titleComponent).setOrigin(0.5, 0.5);
  }

  private createLoadingBar(): void {
    this.loadingBar = this.add.graphics();
    this.progressBar = this.add.graphics();

    const { width, height } = this.cameras.main;

    this.loadingBar.fillStyle(0x222222, 0.8);
    this.loadingBar.fillRect(width / 4 - 2, height / 2 - 18, width / 2 + 4, 36);

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',

      }
    });
    loadingText.setOrigin(0.5, 0.5);
  }
}
