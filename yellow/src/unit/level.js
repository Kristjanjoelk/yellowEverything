class Level {
  constructor(option) {
    this.option = option;
    this.option.gameWidth = option.gameWidth;
    this.option.gameHeight = option.gameHeight;
    this.option.board = option.board.length > 0 ? option.board : this.initBoard(option);
  }

  initBoard(option) {
    var w = option.gameWidth;
    var h = option.gameHeight;
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