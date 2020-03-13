import Game from "./game/game.js";
class Main {
  constructor() {
    console.log("Main started");
    this.game = null;
  }
  creatGame() {
    this.game = new Game();
  }
}

const onload = () => {
  const main = new Main();
  main.creatGame();
};
window.onload = onload;
