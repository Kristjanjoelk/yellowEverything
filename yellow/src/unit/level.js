class Level {
  constructor(option) {
    console.log("Recieved new Level options:", option);
    this.option = option;
    this.option.board = option.board.length > 0 ? option.board : this.initBoard(option);
  }

  initBoard(option) {
    var w = option.gameWidth;
    var h = option.gameHeight;
    console.log("doing new board with h, w", h, w);
    var counter = 0;
    var result = [];
    for(var i = 1; i <= h; i++) {
        for(var k = 1; k <= w; k++) {
            counter++;
            result.push({
                loc: counter,
                value: 0,
            });
        }
    }
    return result;
  }

  rowChange(newRow) {
    console.log("inside rowChange in unit/level", newRow);
    return {
        gameWidth: this.option.gameWidth,
        gameHeight: newRow,
        board: [],
    };
  }

  colChange(newCol) {
    console.log("inside colChange in unit/level", newCol);
    return {
        gameWidth: newCol,
        gameHeight: this.option.gameHeight,
        board: [],
    };
  }

  addLocationValue(loc) {
      loc -= 1;
    //   console.log("Inside addLocationValue", loc);
    //   console.log("the board", this.option.board);
      var tempBoard = this.option.board;
      tempBoard[loc].value = this.option.board[loc].value < 2 ? ++this.option.board[loc].value : 0;
    //   console.log("returning new array", tempBoard);
      return {
          gameWidth: this.option.gameWidth,
          gameHeight: this.option.gameHeight,
          board: tempBoard
      }
  }
}

export default Level;