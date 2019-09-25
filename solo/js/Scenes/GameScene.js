import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    //this.load.image('glogo', 'assets/image.png');
  }

  create () {
    this.add.image(400, 300, 'GameLogo');
  }
};
