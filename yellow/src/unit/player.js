class Player {
  constructor(option) {
    this.option = option;
  }
  down() {
    var h = this.option.gameHeight;
    var w = this.option.gameWidth;
    var curr = this.option.location;
    // console.log("option", this.option);
    if (curr > ((h - 1) * w)) {
        curr -= (h - 1) * w;
    } else {
        curr += h;
    }
    // console.log("Inside player - inside down() - location: " + curr);
    return {
        location: curr,
        gameWidth: this.option.gameWidth,
        gameHeight: this.option.gameHeight
    };
  }
  up() {
    var h = this.option.gameHeight;
    var w = this.option.gameWidth;
    var curr = this.option.location;
    if (curr < h) {
        curr += ((h - 1) * w);
    } else {
        curr -= h;
    }
    // console.log("Inside player - inside up() - location: " + curr);
    return {
        location: curr,
        gameWidth: this.option.gameWidth,
        gameHeight: this.option.gameHeight
    };
  }
  right() {
    var w = this.option.gameWidth;
    var curr = this.option.location;
    if (curr % w === 0 && curr >= w) {
        curr -= (w-1);
    } else {
        curr++;
    }
    // console.log("Inside player - inside right() - location: " + curr);
    return {
        location: curr,
        gameWidth: this.option.gameWidth,
        gameHeight: this.option.gameHeight
    };
  }
  left() {
    var w = this.option.gameWidth;
    var curr = this.option.location;
    if (curr % w === 1 || curr === 1) {
        curr += (w-1);
    } else {
        curr--;
    }
    // console.log("Inside player - inside left() - location: " + curr);
    return {
        location: curr,
        gameWidth: this.option.gameWidth,
        gameHeight: this.option.gameHeight

    };
  }
}

export default Player;