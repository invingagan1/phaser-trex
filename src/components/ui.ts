import Phaser from 'phaser';
import { h1Size, h2Size, h3Size } from '../constants';

class TextComponent extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, fontSize: string, color?: string, backgroundColor?: string) {
    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: fontSize,
      color: color || '#000000',
      backgroundColor: backgroundColor || 'transparent'
    };
    super(scene, x, y, text, style);
    scene.add.existing(this);
  }
}

export class H1 extends TextComponent {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, color?: string, backgroundColor?: string) {
    super(scene, x, y, text, h1Size + 'px', color, backgroundColor);
  }
}

export class H2 extends TextComponent {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, color?: string, backgroundColor?: string) {
    super(scene, x, y, text, h2Size + 'px', color, backgroundColor);
  }
}

export class H3 extends TextComponent {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, color?: string, backgroundColor?: string) {
    super(scene, x, y, text, h3Size + 'px', color, backgroundColor);
  }
}
