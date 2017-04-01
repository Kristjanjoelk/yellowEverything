import { gameLevels } from './const';
// import Box from './boxElement';

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
    this.option.board = level.board.map(function(arr) {
        // let length = arr.length() - 1;
        // let temp = [];
        // while(length--) {
        //   temp.push(new Box(arr[length])); // Maybe use this when Box element is implemented
        // }
        // return temp;
        return arr.slice();
    });;
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
    for(let i = 0; i < this.option.gameHeight; i++) {
      for(let j = 0; j < this.option.gameWidth; j++)
        if(this.option.board[i][j] !== 1) {
          if(this.option.board[i][j] === 5) { continue; }
            flag = 0;
            break;
        }
    }
    if(this.option.moveCounter + 1 >= this.option.solution.max) {
      return 3;
    }

    return flag;
  }
  
  isMoveValid(loc, prevLoc) {
    if(this.option.board[loc.y][loc.x] === 6) { 
      return loc.y === prevLoc.y // if current and previous Y are the same, we are at the same row
    }
    if(this.option.board[loc.y][loc.x] === 7) {
      return loc.x === prevLoc.x // if current and previous X are the same, we are at the same column
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
      if(this.option.board[loc.y][loc.x] === 6 || this.option.board[loc.y][loc.x] === 7) {
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
          board: sameLevel.board.map(function(arr) {
            return arr.slice();
          }),
          winState: 0,
          moveCounter: 0,
          solution: sameLevel.solution,
    }
  }

  setLevel(option) {
    this.option = option;
    return this.option;
  }

  getNextLevel() {

    let nextLevel = gameLevels[this.option.currentLevel + 1];
    // console.log("recived signal to getNextLevel", nextLevel);
        return {
          currentLevel: this.option.currentLevel + 1,
          gameWidth: nextLevel.width,
          gameHeight: nextLevel.height,
          board: nextLevel.board.map(function(arr) {
            return arr.slice();
          }),
          winState: 0,
          moveCounter: 0,
          solution: nextLevel.solution,
      }
  }
}

export default Level;