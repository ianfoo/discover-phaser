var sizeX = 400, sizeY = 300;

var mainState = {
  preload: function() {
    // Load game assets
    game.load.image('logo', 'logo.png');
    game.physics.startSystem(Phaser.Physics.ARCADE);
  },
  create: function() {
    // Set up the game
    this.count = 0;
    this.sprite = game.add.sprite(sizeX/2, sizeY/2, 'logo');
    this.sprite.anchor.setTo(0.5, 0.5);
    game.stage.backgroundColor = '#3498db';
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  },
  update: function() {
    // Main game loop; called 60 times/s
    this.sprite.body.angularVelocity = Math.cos(Math.PI * this.count++/180) * 720;
    this.count %= 360;
    // this.sprite.body.angularVelocity = 25;
    // this.sprite.angle += 3;
  }
};

var game = new Phaser.Game(sizeX, sizeY, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');
