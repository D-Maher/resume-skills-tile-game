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

function applyCSS(tileValue) {
  switch(tileValue) {
    case 2:
      return "two";

    case 4:
      return "four";

    case 8:
      return "eight";

    case 16:
      return "sixteen";

    case 32:
      return "thirty-two";

    case 64:
      return "sixty-four";

    case 128:
      return "one-twenty-eight";

    case 256:
      return "two-fifty-six";

    case 512:
      return "five-twelve";

    case 1024:
      return "ten-twenty-four";

    case 2048:
      return "twenty-forty-eight";
  }
}

function updateBoard() {
  var flattenedBoard = [];

  for (var i = 0; i < game.board.length; i++) {
    for (var j = 0; j < game.board[i].length; j++) {
      flattenedBoard.push(game.board[i][j])
    }
  }

  for (var k = 0; k < $('.tile').length; k++) {
    var $tile = $('.tile').eq(k);

    $tile.html(flattenedBoard[k])
    $tile.removeClass()
    $tile.addClass('tile')
    $tile.addClass(applyCSS(flattenedBoard[k]))

    if ($tile.html() === "0") {
      $tile.html("")
    }
  }

  game.printBoard();
};
