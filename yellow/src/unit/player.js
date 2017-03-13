class Player {
  constructor(option) {
    this.option = option;
  }
  down(level) {
    let h = level.option.gameHeight;
    // var curr = this.option.location;
    // // console.log("option", level);
    // if (curr > ((h - 1) * w)) {
    //     curr -= (h - 1) * w;
    // } else {
    //     curr += h;
    // }
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
    // var curr = this.option.location;
    // if (curr <= h) {
    //     curr += ((h - 1) * w);
    // } else {
    //     curr -= h;
    // }
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
    // if (curr % w === 0 && curr >= w) {
    //     curr -= (w-1);
    // } else {
    //     curr++;
    // }
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
    // if (curr % w === 1 || curr === 1) {
    //     curr += (w-1);
    // } else {
    //     curr--;
    // }

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
}

export default Player;