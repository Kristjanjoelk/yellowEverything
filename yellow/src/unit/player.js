class Player {
  constructor(option) {
    this.option = option;
  }
  down(level) {
    let h = level.option.gameHeight;
    let curr = Object.assign({}, this.option.location);
    if(curr.y < (h - 1)) {
        curr.y++;
    } else {
        curr.y = 0;
    }

    // console.log("Inside player - inside down() - location: " + curr);
    return {
        location: curr,
        previousLoc: this.option.location,
        gameWidth: level.option.gameWidth,
        gameHeight: level.option.gameHeight
    };
  }
  up(level) {
    let h = level.option.gameHeight;
    let curr = Object.assign({}, this.option.location);
    if(curr.y > 0) {
        curr.y--;
    } else {
        curr.y = h - 1;
    }

    // console.log("Inside player - inside up() - location: " + curr);
    return {
        location: curr,
        previousLoc: this.option.location,
        gameWidth: level.option.gameWidth,
        gameHeight: level.option.gameHeight
    };
  }
  right(level) {
    let w = level.option.gameWidth;
    let curr = Object.assign({}, this.option.location);
    if(curr.x < (w - 1)) {
        curr.x++;
    } else {
        curr.x = 0;
    }

    // console.log("Inside player - inside right() - location: " + curr);
    return {
        location: curr,
        previousLoc: this.option.location,
        gameWidth: level.option.gameWidth,
        gameHeight: level.option.gameHeight
    };
  }
  left(level) {
    let w = level.option.gameWidth;
    let curr = Object.assign({}, this.option.location);
    if(curr.x > 0) {
        curr.x--;
    } else {
        curr.x = (w - 1);
    }
    // console.log("Inside player - inside left() - location: " + curr);
    return {
        location: curr,
        previousLoc: this.option.location,
        gameWidth: level.option.gameWidth,
        gameHeight: level.option.gameHeight
    };
  }


  resetPlayer(option) {
      return {
        location: {
            x: 0,
            y: 0,
        },
        previousLoc: {
            x: 0,
            y: 0,
        },
        gameWidth: option.gameWidth,
        gameHeight: option.gameHeight
    };
  }

  invalidMove() {
    return {
        location: this.option.location,
        previousLoc: this.option.location,
        gameWidth: this.option.gameWidth,
        gameHeight: this.option.gameHeight,
        invalidMove: true
    };
  }
}

export default Player;