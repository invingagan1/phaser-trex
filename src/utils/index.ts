export const images = {
  background: 'assets/background.png',
}
export const audio = {
  bgm: 'assets/bgm.mp3',
}

export const spriteSheets = {
  GROUND: "ground",
  HUD: "hud",
  PLAYERS: "players",
}
const getSpriteSheet = (key: string) => `assets/sprite-sheets/${key}.png`;

export const spriteSheetImages = {
  [spriteSheets.GROUND]: getSpriteSheet(spriteSheets.GROUND),
  [spriteSheets.HUD]: getSpriteSheet(spriteSheets.HUD),
  [spriteSheets.PLAYERS]: getSpriteSheet(spriteSheets.PLAYERS),
}
export const spriteSheetFrames = {
  [spriteSheets.GROUND]: { frameWidth: 128, frameHeight: 128 },
  [spriteSheets.HUD]: { frameWidth: 128, frameHeight: 128 },
  [spriteSheets.PLAYERS]: { frameWidth: 128, frameHeight: 256 },
}
