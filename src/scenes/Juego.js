// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Juego extends Phaser.Scene {
  constructor() {
    super("Juego");
  }

  preload() {
    // Cargar assets
    this.load.image("plataforma1", "./images/tilepasto.png");
    this.load.image("Fondo", "./images/Background.png");
    this.load.spritesheet("personaje", "./images/Player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    //this.load.image("salida", "./public/images/salida.png");
    this.load.tilemapTiledJSON("map", './tilemaps/nivel1.json');
    this.load.image("Tileset_pasto", "./images/tileset_pasto.png");
    this.load.image("Tile", "./images/Tileset.png");
  }

  create() {
    // Cargar el mapa de tilemaps
  const map = this.make.tilemap({ key: 'map' });

  // Cargar las capas de tilemap
 
  const tileset = map.addTilesetImage("TIleset", "Tile");
 
  
  const plataformaLayer = map.createStaticLayer("Plataformas", tileset, 0, 0);
  const FondoLayer = map.createStaticLayer("Fondo", tileset, 0, 0);
  const objectosLayer = map.getObjectLayer("objetos");

  plataformaLayer.setCollisionByProperty({ colision: "true" });
  console.log(objectosLayer);
    // Ajustar la escala y las propiedades de la capa, según sea necesario
    //layer.setScale(factor_de_escala);
    // ...otras propiedades de la capa

    // Añadir cualquier lógica adicional o interacción con el mapa de tilemaps
  }
}
