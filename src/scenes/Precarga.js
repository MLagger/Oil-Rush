export default class Precarga extends Phaser.Scene {
  // escena para optimiozar tiempos
  // carga el preload solo una vez y sirve para todo el juego
  constructor() {
    // key of the scene
    super("Precarga");
  }

  preload() { 
    this.load.tilemapTiledJSON('nivel1', './public/tilemaps/nivel1.json');

  }
    
  create() {
    //  Our player animations, turning, walking left and walking right.
    // se crea una sola vez, para que no de error en el restart de la escena
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("personaje", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "personaje", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("personaje", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // init scene juego
    this.scene.start("menu");
  }
}
