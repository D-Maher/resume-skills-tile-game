$(document).ready(function() {
  
  game = new Game;

  game.printBoard();

  Mousetrap.bind("left", function() {
    game.moveLeft();
    game.printBoard();
  })
});