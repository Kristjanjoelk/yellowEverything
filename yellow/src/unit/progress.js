class Progress {
    constructor(option) {
        this.option = option;
    }

    setPreviousMap() {
        if (this.option.currentBoard === 0) {
            return -1;
        }
        let previousIndex = this.option.currentBoardIndex > 0 ? this.option.currentBoardIndex - 1 : 0;
        return {
            boards: this.option.boards,
            currentBoardIndex: previousIndex,
            totalMoves: this.option.totalMoves
        }
    }

    setNextMap() {
        if (this.option.currentBoardIndex >= this.option.boards.length) {
            return -1;
        }
        let nextIndex = this.option.currentBoardIndex >= 0 ?  this.option.currentBoardIndex + 1 : 0;
        console.log("Reutnring from setNextMap", nextIndex);
        return {
            boards: this.option.boards,
            currentBoardIndex: nextIndex,
            totalMoves: this.option.totalMoves
        }
    }

    calculateTotalMoves(boards, status) {
        if(!boards[0]) {
            return 0;
        }
        let i = boards.length;
        let counter = 0;
        while (i--) {
            if(status) {
                console.log("inside status");
                counter +=  status ? boards[i].moveCounter : 0;
            }
        }
        console.log("inside calculateTotalMoves", counter, boards[0].moveCounter);
        return counter;
    }

    addBoard(level, status) {
        if(this.option.boards[level.option.currentLevel] && this.option.boards[level.option.currentLevel].moveCounter < level.option.moveCounter) {
            console.log("movecounter is less than original one");
            return -1;
        }
        let newBoards = this.option.boards.slice();

        // If status is TRUE then we set winState to true
        level.option.winState = status ? 2 : 0;
        level.option.board = level.option.solution.board.map(function(arr) {
            return arr.slice();
        });
        newBoards.push(level.option);
        let currentIndex = this.option.currentBoardIndex + 1;
        console.log("recived signal to save level to progress: ", level);
        console.log("added new level to progress", newBoards);
        return {
            boards: newBoards,
            currentBoardIndex: currentIndex,
            totalMoves: this.calculateTotalMoves(newBoards, status)
        }
    }
}

export default Progress;