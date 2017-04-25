function Game() {
  this.board = [[0, 2, 0, 0],
                [0, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 0, 4, 0]];
};

function prettify(board) {
  var prettyBoard = "";

  for (var i = 0; i < board.length; i++) {
    var rowString = "|";

    for (var j = 0; j < board.length; j++) {
      rowString += board[i][j].toString() + "|";
    }

    rowString += "\n"
    prettyBoard += rowString
  }

  return prettyBoard;
};

Game.prototype.printBoard = function() {
  console.log(prettify(this.board));
};

function isValidMove(currentValue, destinationValue) {
  if (destinationValue === 0 || currentValue === destinationValue) {
    return true;
  } else {
    return false;
  }
};

function findDestination(currentCoords, direction, limit) {
  var board = game.board;

  var currentRow = currentCoords[0];
  var currentColumn = currentCoords[1];
  var currentValue = board[currentRow][currentColumn];

  switch(direction) {
    case "left":

      for (var lastCheckedColumn = currentColumn - 1; lastCheckedColumn >= limit; lastCheckedColumn--) {
        var destinationValue = board[currentRow][lastCheckedColumn];

        if (isValidMove(currentValue, destinationValue) === false) {
          return [currentRow, lastCheckedColumn + 1];
        }
      }

      return [currentRow, limit]

    case "right":

      for (var lastCheckedColumn = currentColumn + 1; lastCheckedColumn <= limit; lastCheckedColumn++) {
        var destinationValue = board[currentRow][lastCheckedColumn];

        if (isValidMove(currentValue, destinationValue) === false) {
          return [currentRow, lastCheckedColumn - 1];
        }
      }

      return [currentRow, limit]

    case "up":

      for (var lastCheckedRow = currentRow - 1; lastCheckedRow >= limit; lastCheckedRow--) {
        var destinationValue = board[lastCheckedRow][currentColumn];

        if (isValidMove(currentValue, destinationValue) === false) {
          return [lastCheckedRow + 1,currentColumn];
        }
      }

      return [limit, currentColumn];

    case "down":

      for (var lastCheckedRow = currentRow + 1; lastCheckedRow <= limit; lastCheckedRow++) {
        var destinationValue = board[lastCheckedRow][currentColumn];

        if (isValidMove(currentValue, destinationValue) === false) {
          return [lastCheckedRow - 1,currentColumn];
        }
      }

      return [limit, currentColumn];
  }
};

Game.prototype.moveLeft = function() {
  var board = this.board;

  console.log("LEFT")

  for (var row = 0; row <= 3; row++) {
    var limitColumn = 0;

    for (var column = 1; column <= 3; column++) {
      var currentValue = board[row][column];

      if (currentValue !== 0) {
        var destination = findDestination([row, column], "left", limitColumn);

        var destinationRow = destination[0];
        var destinationColumn = destination[1];
        var destinationValue = board[destinationRow][destinationColumn];

        if (destinationValue === currentValue && column !== destinationColumn) {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue + destinationValue
          limitColumn += 1
        } else {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue
        }
      }
    }
  }
};

Game.prototype.moveRight = function() {
  var board = this.board;

  console.log("RIGHT")

  for (var row = 0; row <= 3; row++) {
    var limitColumn = 3;

    for (var column = 2; column >= 0; column--) {
      var currentValue = board[row][column];

      if (currentValue !== 0) {
        var destination = findDestination([row, column], "right", limitColumn);
        var destinationRow = destination[0];
        var destinationColumn = destination[1];
        var destinationValue = board[destinationRow][destinationColumn];

        if (destinationValue === currentValue && column !== destinationColumn) {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue + destinationValue
          limitColumn -= 1
        } else {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue
        }
      }
    }
  }
};

Game.prototype.moveUp = function() {
  var board = this.board;

  console.log("UP");

  for (var column = 0; column <= 3; column++) {
    var limitRow = 0;

    for (var row = 1; row <= 3; row++) {
      var currentValue = board[row][column];

      if (currentValue !== 0) {
        var destination = findDestination([row, column], "up", limitRow);
        var destinationRow = destination[0];
        var destinationColumn = destination[1];
        var destinationValue = board[destinationRow][destinationColumn];

        if (destinationValue === currentValue && row !== destinationRow) {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue + destinationValue
          limitRow += 1
        } else {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue
        }
      }
    }
  }
};

Game.prototype.moveDown = function() {
  var board = this.board;

  console.log("DOWN");

  for (var column = 0; column <= 3; column++) {
    var limitRow = 3;

    for (var row = 2; row >= 0; row--) {
      var currentValue = board[row][column];

      if (currentValue !== 0) {
        var destination = findDestination([row, column], "down", limitRow);
        var destinationRow = destination[0];
        var destinationColumn = destination[1];
        var destinationValue = board[destinationRow][destinationColumn];

        if (destinationValue === currentValue && row !== destinationRow) {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue + destinationValue
          limitRow -= 1
        } else {
          board[row][column] = 0
          board[destinationRow][destinationColumn] = currentValue
        }
      }
    }
  }
};
