$(document).ready(function() {
  
  game = new Game;

  game.printBoard();

  Mousetrap.bind("left", function() {
    game.moveLeft();
    game.printBoard();
  })

  Mousetrap.bind("right", function() {
    game.moveRight();
    game.printBoard();
  })


});