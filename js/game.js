function Game() {
  this.board = [[0, 0, 2, 0],
                [0, 0, 0, 0],
                [0, 0, 2, 0],
                [0, 4, 0, 0]];
  this.prettyBoard = this.prettify(this.board);
}

Game.prototype.prettify = function(board) {
  var prettyBoard = ""

  for (var i = 0; i < board.length; i++) {
    var rowString = "|"

    for (var j = 0; j < board.length; j++) {
      rowString += board[i][j].toString() + "|";
    }

    rowString += "\n"

    prettyBoard += rowString
  }

  return prettyBoard;
}

function isValidMove(currentValue, destValue) {
  if (destValue === 0 || currentValue === destValue) {
    return true;
  } else {
    return false;
  }
}
