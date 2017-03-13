const StorageKey = 'REACT_YELLOW';

const gameLevels = [
  {
    width: 3,
    height: 3,
    solution: {
      firstPlace: 9,
      secondPlace: [10,11,12],
      thirdPlace: [13,14,15],
      max: 16
    },
    board: 
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
  },
];
// eslint-disable-next-line
const gameLevelsOld = [
  {
    width: 3,
    height: 3,
    board: [0, 0, 0,
            0, 0, 0,
            0, 0, 0
    ],
  },
  {
    width: 3,
    height: 3,
    board: [1, 0, 1,
            0, 1, 0,
            0, 0, 0
    ],
  },
  {
    width: 3,
    height: 3,
    board: [0, 0, 0,
            6, 0, 6,
            0, 0, 0
    ],
  },
  {
    width: 3,
    height: 3,
    board: [0, 5, 0,
            5, 0, 5,
            0, 0, 0
    ],
  },
  {
    width: 3,
    height: 3,
    board: [1, 0, 2,
            0, 0, 0,
            1, 0, 1
    ],
  },
  {
    width: 4,
    height: 4,
    board: [1, 0, 2, 0,
            0, 0, 0, 0,
            1, 0, 1, 0,
            0, 0, 1, 0
    ],
  },
];

module.exports = {
  StorageKey,
  gameLevels,
};