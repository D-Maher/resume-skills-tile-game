$(document).ready(function() {
  
  game = new Game;

  game.spawnTile();
  game.spawnTile();
  updateBoard();

  Mousetrap.bind("left", function() {
    game.moveLeft();
    game.spawnTile();
    updateBoard();
  })

  Mousetrap.bind("right", function() {
    game.moveRight();
    game.spawnTile();
    updateBoard();
  })

  Mousetrap.bind("up", function() {
    game.moveUp();
    game.spawnTile();
    updateBoard();
  })

  Mousetrap.bind("down", function() {
    game.moveDown();
    game.spawnTile();
    updateBoard();
  })
});

function updateBoard() {
  var flattenedBoard = [];

  for (var i = 0; i < game.board.length; i++) {
    for (var j = 0; j < game.board[i].length; j++) {
      flattenedBoard.push(game.board[i][j])
    }
  }

  for (var k = 0; k < $('td').length; k++) {
    var $tile = $('td').eq(k);

    $tile.html(flattenedBoard[k])

    if ($tile.html() === "0") {
      $tile.html("")
    }
  }

  game.printBoard();
};