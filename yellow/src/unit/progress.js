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
        let nextIndex = this.option.currentBoardIndex > 0 ?  this.option.currentBoardIndex + 1 : 0;
        return {
            boards: this.option.boards,
            currentBoardIndex: nextIndex,
            totalMoves: this.option.totalMoves
        }
    }

    calculateTotalMoves() {
        let i = this.option.boards.length;
        let counter = 0;
        while (i--) {
            counter += this.option.boards[i].winState ? this.option.boards[i].moveCounter : 0;
        }
        return counter;
    }

    addBoard(level) {
        let temp = this.option.boards.slice();
        level.option.winState = 2;
        temp.push(level.option);
        let currentIndex = this.option.currentBoardIndex + 1;
        console.log("recived new level: ", level);
        console.log("added new level to progress", temp);
        return {
            boards: temp,
            currentBoardIndex: currentIndex,
            totalMoves: this.calculateTotalMoves()
        }
    }
}

export default Progress;