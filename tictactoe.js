var prompt = require('prompt');

var Board = function() {
  this.board = [
    [' '], [' '], [' '],
    [' '], [' '], [' '],
    [' '], [' '], [' ']
  ];
};

Board.prototype.checkBoard = function(player) {
  // if 3 in a row, return true
  // hardcode all cases?

  if (
    this.board[0][0] === player && this.board[1][0] === player && this.board[2][0] === player ||
    this.board[0][0] === player && this.board[3][0] === player && this.board[6][0] === player ||
    this.board[0][0] === player && this.board[4][0] === player && this.board[8][0] === player ||
    this.board[1][0] === player && this.board[4][0] === player && this.board[7][0] === player ||
    this.board[2][0] === player && this.board[5][0] === player && this.board[8][0] === player ||
    this.board[3][0] === player && this.board[4][0] === player && this.board[5][0] === player ||
    this.board[6][0] === player && this.board[7][0] === player && this.board[8][0] === player ||
    this.board[2][0] === player && this.board[4][0] === player && this.board[6][0] === player
    ) {
    return true
  }


  return false;
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

  console.log(this.board[0][0] + '|' + this.board[1][0] + '|' + this.board[2][0]);
  console.log('-+-+-');
  console.log(this.board[3][0] + '|' + this.board[4][0] + '|' + this.board[5][0]);
  console.log('-+-+-');
  console.log(this.board[6][0] + '|' + this.board[7][0] + '|' + this.board[8][0]);

}

const playX = (board) => {
  prompt.get(['x-move'], (err, result) => {
    // add to board
    board.addMove(result['x-move'], 'x');
    // check if x won
    board.showBoard();

    if (board.checkBoard('x')) {
      console.log('x wins!');
    } else {
      playO(board);
    }
  });
};

const playO = (board) => {
  prompt.get(['o-move'], (err, result) => {
    // add to board
    board.addMove(result['o-move'], 'o');
    // check if x won
    board.showBoard();

    if (board.checkBoard('o')) {
      console.log('o wins!');
    } else {
      playX(board);
    }
  });
};


const playTicTacToe = () => {
  var board = new Board();
  // console.log(board.board);
  board.showBoard();
  playX(board);

};

playTicTacToe();