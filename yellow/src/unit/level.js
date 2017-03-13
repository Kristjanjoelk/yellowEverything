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
    this.option.board = [...level.board];
    this.option.solution = level.solution;
  }

  rowChange(newRow) {
    // console.log("inside rowChange in unit/level", newRow);
    return {
        currentLevel: this.option.currentLevel,
        gameWidth: this.option.gameWidth,
        gameHeight: newRow,
        board: [],
        winState: 0,
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
        winState: 0,
        moveCounter: 0
    };
  }

  checkBoardState() {
    let flag = 1;
    // let size = this.option.gameWidth * this.option.gameHeight;
    for(let i = 0; i < this.option.gameHeight; i++) {
      for(let j = 0; j < this.option.gameWidth; j++)
        if(this.option.board[i][j] !== 1) {
          if(this.option.board[i][j] === 5) { continue; }
            flag = 0;
            break;
        }
    }
    console.log(this.option.moveCounter, this.option.solution.max);
    if(this.option.moveCounter + 1 >= this.option.solution.max) {
      console.log("Ohhoo.. max moves reached");
      return 3;
    }

    return flag;
  }
  
  isMoveValid(loc, prevLoc) {
    if(this.option.board[loc.y][loc.x] === 6) {
      //return prevLoc - loc < this.option.gameWidth && prevLoc - loc > -this.option.gameWidth;
      return loc.y === prevLoc.y
    }
    return this.option.board[loc.y][loc.x] !== 5;
  }

  addLocationValue(player) {
      let loc = player.location;
      let prevLoc = player.previousLoc;
      if(!this.isMoveValid(loc, prevLoc)) {
        return -1;
      }
    //   console.log("Inside addLocationValue", loc);
    //   console.log("the board", this.option.board);
      var tempBoard = this.option.board;
      if(this.option.board[loc.y][loc.x] === 6) {
        this.option.board[loc.y][loc.x] = 1
      } else {
        tempBoard[loc.y][loc.x] = this.option.board[loc.y][loc.x] < 2 ? ++this.option.board[loc.y][loc.x] : 0;
      }
    //   console.log("returning new array", tempBoard);
      return {
          currentLevel: this.option.currentLevel,
          gameWidth: this.option.gameWidth,
          gameHeight: this.option.gameHeight,
          board: tempBoard,
          winState: this.checkBoardState(),
          moveCounter: ++this.option.moveCounter,
          solution: this.option.solution
      }
  }

  reset() {
    let sameLevel = gameLevels[this.option.currentLevel];
    // console.log("recived signal to reset");
    return {
          currentLevel: this.option.currentLevel,
          gameWidth: this.option.gameWidth,
          gameHeight: this.option.gameHeight,
          board: [...sameLevel.board],
          winState: 0,
          moveCounter: 0,
          solution: sameLevel.solution,
    }
  }

  getNextLevel() {
    
    let nextLevel = gameLevels[this.option.currentLevel + 1];
    // console.log("recived signal to getNextLevel", nextLevel);
        return {
          currentLevel: this.option.currentLevel + 1,
          gameWidth: nextLevel.width,
          gameHeight: nextLevel.height,
          board: [...nextLevel.board],
          winState: 0,
          moveCounter: 0,
          solution: nextLevel.solution,
      }
  }
}

export default Level;