//import Nivel1 from "./src/scenes/Nivel1.js";


import Juego from "./src/scenes/Juego.js";
import Menu from "./src/scenes/Menu.js";
import Precarga from "./src/scenes/Precarga.js"


// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  
  scene: [Precarga, Menu, Juego,],

  
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
