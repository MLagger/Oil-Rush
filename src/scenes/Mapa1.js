export default class Juego extends Phaser.Scene {
  constructor() {
    super("Juego");
  }

  init(data) {
    
  }                                                 

  preload() {
    // load assets
    //this.load.tilemapTiledJSON("Mapa1", "./public/tilemaps/Mapa1.json");
    this.load.image("fondo", "./public/images/Background.png");
    this.load.image("tilesPlataformas", "./public/images/tileset_pasto.png");
    this.load.image("tilepasto", "./public/images/tile_pasto.png")
    this.load.image("tiletierra","./public/images/tiletierra.png")
    this.load.image("Oil ball", "./public/images/petroleo.png");
    this.load.image("mainmenu", "./public/images/main_menu_background.png")
    this.load.spritesheet("personaje", "./public/images/Player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.image("salida", "./public/images/salida.png");
  }

  create() {
    var platforms;
    var player;

    // Fondo del juego
    this.add.image("fondo", 400, 300);
  
    // Plataformas
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'tilepasto').setScale(2).refreshBody();

    // Jugador
    player = this.physics.add.sprite(100, 450, 'personaje');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Animaciones del jugador
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('personaje', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'personaje', frame: 4 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('personaje', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    // Colisiones
    this.physics.add.collider(player, platforms);

    // Teclas de salto
    var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Evento de salto
    spaceKey.on('down', function() {
      if (player.body.touching.down) {
        player.setVelocityY(-500); // Velocidad del salto
      }
    }, this);
  }
  
  update() {
    // Lógica de actualización del juego (por ejemplo, movimiento del jugador)
    // update game objects
    // check input
    // move left
    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-160);
      this.jugador.anims.play("left", true);
    }
    // move right
    else if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(160);
      this.jugador.anims.play("right", true);
    }
    // stop
    else {
      this.jugador.setVelocityX(0);
      this.jugador.anims.play("turn");
    }

    // jump
    if (this.cursors.up.isDown && this.jugador.body.blocked.down) {
      this.jugador.setVelocityY(-330);
    }
  }
}

    
  

    


