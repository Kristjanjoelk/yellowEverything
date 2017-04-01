// TODO: Implement this idea, easier to manage, but tricky and time consuming to implement :/:/:/
const types = {
    0: {
        initValue: 0,
        currentValue: 0,
        maxValue: 2,
        hasPlayer: false
    },
    4: {
        initValue: 4,
        currentValue: 4,
        maxValue: 6,
        hasPlayer: false
    },
    7: {
        initValue: 7,
        currentValue: 7,
        maxValue: 9,
        hasPlayer: false
    },
    10: {
        initValue: 10,
        currentValue: 10,
        maxValue: 10,
        hasPlayer: false
    }
}

class boxElement {
  constructor(type) {
    this.option = types[type];
    console.log("created a box element with the options:", this.option);
  }
}

export default boxElement;