$(document).ready(function() {
  
  game = new Game;

  game.spawnTile();
  game.spawnTile();
  game.printBoard();

  Mousetrap.bind("left", function() {
    game.moveLeft();
    game.spawnTile();
    game.printBoard();
  })

  Mousetrap.bind("right", function() {
    game.moveRight();
    game.spawnTile();
    game.printBoard();
  })

  Mousetrap.bind("up", function() {
    game.moveUp();
    game.spawnTile();
    game.printBoard();
  })

  Mousetrap.bind("down", function() {
    game.moveDown();
    game.spawnTile();
    game.printBoard();
  })
});