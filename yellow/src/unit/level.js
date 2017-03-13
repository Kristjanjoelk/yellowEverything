import { gameLevels } from './const';
class Level {
  constructor(option) {
    // console.log("Recieved new Level options:", option);
    this.option = option;
    if(this.option.board.length === 0) {
      this.initBoard();
    }
  }

  initBoard() {
    let level = gameLevels[this.option.currentLevel];
    this.option.gameWidth = level.width;
    this.option.gameHeight = level.height;
    this.option.board = level.board;
  }

  rowChange(newRow) {
    // console.log("inside rowChange in unit/level", newRow);
    return {
        currentLevel: this.option.currentLevel,
        gameWidth: this.option.gameWidth,
        gameHeight: newRow,
        board: [],
        winState: false,
        moveCounter: 0
    };
  }

  colChange(newCol) {
    // console.log("inside colChange in unit/level", newCol);
    return {
        currentLevel: this.option.currentLevel,
        gameWidth: newCol,
        gameHeight: this.option.gameHeight,
        board: [],
        winState: false,
        moveCounter: 0
    };
  }

  checkBoardState() {
    let flag = true;
    let size = this.option.gameWidth * this.option.gameHeight;
    for(let i = 0; i < size; i++) {
      if(this.option.board[i] !== 1) {
        flag = false;
        break;
      }
    }
    if(flag) {
      console.log("DING DING DING! win");
    }
    return flag;
  }
  

  addLocationValue(loc) {
      loc -= 1;
    //   console.log("Inside addLocationValue", loc);
    //   console.log("the board", this.option.board);
      var tempBoard = this.option.board;
      tempBoard[loc] = this.option.board[loc] < 2 ? ++this.option.board[loc] : 0;
    //   console.log("returning new array", tempBoard);
      return {
          currentLevel: this.option.currentLevel,
          gameWidth: this.option.gameWidth,
          gameHeight: this.option.gameHeight,
          board: tempBoard,
          winState: this.checkBoardState(),
          moveCounter: ++this.option.moveCounter
      }
  }

  getNextLevel() {
    
    let nextLevel = gameLevels[++this.option.currentLevel];
    console.log("recived signal to getNextLevel", nextLevel);
        return {
          currentLevel: this.option.currentLevel,
          gameWidth: nextLevel.width,
          gameHeight: nextLevel.height,
          board: nextLevel.board,
          winState: false,
          moveCounter: 0
      }
  }
}

export default Level;