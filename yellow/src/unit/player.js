class Player {
  constructor(option) {
    this.option = option;
  }
  down(level) {
    var h = level.option.gameHeight;
    var w = level.option.gameWidth;
    var curr = this.option.location;
    // console.log("option", level);
    if (curr > ((h - 1) * w)) {
        curr -= (h - 1) * w;
    } else {
        curr += h;
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
    var h = level.option.gameHeight;
    var w = level.option.gameWidth;
    var curr = this.option.location;
    if (curr <= h) {
        curr += ((h - 1) * w);
    } else {
        curr -= h;
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
    var w = level.option.gameWidth;
    var curr = this.option.location;
    if (curr % w === 0 && curr >= w) {
        curr -= (w-1);
    } else {
        curr++;
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
    var w = level.option.gameWidth;
    var curr = this.option.location;
    if (curr % w === 1 || curr === 1) {
        curr += (w-1);
    } else {
        curr--;
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
        location: 1,
        previousLoc: 1,
        gameWidth: option.gameWidth,
        gameHeight: option.gameHeight
    };
  }
}

export default Player;