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

function isValidMove(currentValue, destinationValue) {
  if (destinationValue === 0 || currentValue === destinationValue) {
    return true;
  } else {
    return false;
  }
}

function findDestination(currentCoords, direction) {
  var board = game.board;

  var currentRow = currentCoords[0];
  var currentColumn = currentCoords[1];

  switch(direction) {
    case "left":

      for (var lastCheckedColumn = currentColumn - 1; lastCheckedColumn >= 0; lastCheckedColumn--) {
        var currentValue = board[currentRow][currentColumn];
        var destinationValue = board[currentRow][lastCheckedColumn]

        if (isValidMove(currentValue, destinationValue) === false) {
          return [currentRow, lastCheckedColumn + 1];
        }
      }

      return [currentRow, 0]
  }
}

Game.prototype.moveLeft = function() {
  var board = this.board;
  var moved = false;

  console.log("LEFT")

  for (var row = 0; row <= 3; row++) {
    for (var column = 1; column <= 3; column++) {
      var currentValue = board[row][column]

      if (currentValue !== 0) {
        var destination = findDestination([row, column], "left");

        var destinationRow = destination[0];
        var destinationColumn = destination[1];

        var destinationValue = board[destinationRow][destinationColumn];

        if (destinationValue === currentValue) {
          board[destinationRow][destinationColumn] = currentValue + destinationValue
          board[row][column] = 0
        } else {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue
        }
      }
    }
  }
}
