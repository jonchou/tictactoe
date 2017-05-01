var prompt = require('prompt');

var Board = function() {
  this.board = [
    [' '], [' '], [' '],
    [' '], [' '], [' '],
    [' '], [' '], [' ']
  ];
};

Board.prototype.checkBoard = (player) => {
  console.log('board x');
};

Board.prototype.addMove = function(position, player) {
  // no error handling
  switch(position) {
    case 'q':
      this.board[0][0] = player;
      break;
    case 'w':
      this.board[1][0] = player;
      break;
    case 'e':
      this.board[2][0] = player;
      break;
    case 'a':
      this.board[3][0] = player;
      break;
    case 's':
      this.board[4][0] = player;
      break;
    case 'd':
      this.board[5][0] = player;
      break;
    case 'z':
      this.board[6][0] = player;
      break;
    case 'x':
      this.board[7][0] = player;
      break;
    case 'c':
      this.board[8][0] = player;
      break;
    default:
      break;
  }

};

Board.prototype.showBoard = function() {
  for (var i = 0; i < this.board.length; i++) {
    console.log(this.board[i][0]);
  }

  console.log('  |  |  ');
  console.log('--+--+--');
  console.log('  |  |  ');
  console.log('--+--+--');
  console.log('  |  |  ');
}

const playX = (board) => {
  prompt.get(['x-move'], (err, result) => {
    console.log(result);
    // add to board
    board.addMove(result['x-move'], 'x');
    // board.checkBoard('x');
    // check if x won
    board.showBoard();

    // if not
      // play y
  });
};


const playTicTacToe = () => {
  var board = new Board();
  // console.log(board.board);
  board.showBoard();
  playX(board);

};

playTicTacToe();