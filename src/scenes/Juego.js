// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Juego extends Phaser.Scene {
  constructor() {
    super("Juego");
  }

  create() {
    // Cargar el mapa de tilemaps
    console.log("create");
    const map = this.make.tilemap({ key: "map" });

    // Cargar las capas de tilemap

    const backgoundTileset = map.addTilesetImage("Background", "Background");
    const pastoTileset = map.addTilesetImage("Pasto", "Pasto");

    const plataformaLayer = map.createLayer("Plataformas", pastoTileset, 0, 0);
    const FondoLayer = map.createLayer("Fondo", backgoundTileset, 0, 0);
    const objectosLayer = map.getObjectLayer("Objetos");

    // plataformaLayer.setCollisionByProperty({ colision: "true" });
    console.log("objectosLayer", objectosLayer);
    // Ajustar la escala y las propiedades de la capa, según sea necesario
    //layer.setScale(factor_de_escala);
    // ...otras propiedades de la capa

    // Añadir cualquier lógica adicional o interacción con el mapa de tilemaps

    this.player = this.physics.add.sprite(100, 10, "Oil");
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  }
}
