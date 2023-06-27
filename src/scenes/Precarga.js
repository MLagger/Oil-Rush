export default class Precarga extends Phaser.Scene {
  // escena para optimiozar tiempos
  // carga el preload solo una vez y sirve para todo el juego
  constructor() {
    // key of the scene
    super("Precarga");
  }

  preload() { 
    this.load.image("menuFondo", "./public/images/main_menu_background.png");
    this.load.image("logoPhaser", "./public/images/phaser_logo.png");
    this.load.image("plataforma1", "./public/images/tilepasto.png");
    this.load.image("Fondo", "./public/images/Background.png");
    this.load.spritesheet("personaje", "./public/images/Player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    //this.load.image("salida", "./public/images/salida.png");
    this.load.tilemapTiledJSON("map", './public/tilemaps/nivel1.json');
    this.load.image("Pasto", "./public/images/tilepasto.png");
    this.load.image("Background", "./public/images/Background.png");

    this.load.image("Oil", "./public/images/petroleo.png");
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
