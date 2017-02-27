class Player {
  constructor(option) {
    this.option = option;
  }
  down() {
    var curr = this.option.location;
    if (curr > ((10 - 1) * 10)) {
        curr -= (10 - 1) * 10;
    } else {
        curr += 10;
    }
    // console.log("Inside player - inside down() - location: " + this.option.location);
    return {
        location: curr
    };
  }
  up() {
    var curr = this.option.location;
    if (curr < 10) {
        curr += ((10 - 1) * 10);
    } else {
        curr -= 10;
    }
    // console.log("Inside player - inside up() - location: " + this.option.location);
    return {
        location: curr
    };
  }
  right() {
    var curr = this.option.location;
    if (curr % 10 === 0 && curr >= 10) {
        curr -= 9;
    } else {
        curr++;
    }
    // console.log("Inside player - inside right() - location: " + this.option.location);
    return {
        location: curr
    };
  }
  left() {
    var curr = this.option.location;
    if (curr % 10 === 1 || curr === 1) {
        curr += 9;
    } else {
        curr--;
    }
    // console.log("Inside player - inside left() - location: " + this.option.location);
    return {
        location: curr

    };
  }
}

export default Player;