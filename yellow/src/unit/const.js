const StorageKey = 'REACT_YELLOW';

const gameLevels = [
    { // 1
    width: 3,
    height: 3,
    solution: {
      board: 
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      firstPlace: 9,
      secondPlace: {10:1, 11:1},
      thirdPlace: {12: 1, 13:1, 14:1, 15: 1},
      max: 16,
      solutionSequence: [{"x":"0","y":"0"},{"x":"0","y":"2"},{"x":"0","y":"0"},{"x":"2","y":"0"},{"x":"2","y":"2"},{"x":"1","y":"2"},{"x":"1","y":"1"},{"x":"1","y":"1"}]
    },
    board: 
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
  },
  { // 1-2
    width: 3,
    height: 3,
    solution: {
      board: 
      [
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 0]
      ],
      firstPlace: 9,
      secondPlace: {9: 1, 10:1, 11:1},
      thirdPlace: {12: 1, 13:1, 14:1, 15: 1},
      max: 16,
      solutionSequence: []
    },
    board: 
    [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ],
  },
    { // 2
    width: 3,
    height: 3,
    solution: {
      board: 
      [
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0]
      ],
      firstPlace: 6,
      secondPlace: {6: 1, 7:1, 8:1},
      thirdPlace: {9: 1, 10:1, 11:1, 12: 1},
      max: 13,
      solutionSequence: [{"x":"0","y":"0"},{"x":"0","y":"2"},{"x":"0","y":"0"},{"x":"2","y":"0"},{"x":"2","y":"2"},{"x":"1","y":"2"},{"x":"1","y":"1"},{"x":"1","y":"1"}]
    },
    board: 
    [
      [0, 1, 0],
      [1, 0, 1],
      [0, 0, 0]
    ],
  },
      { // 3
    width: 3,
    height: 3,
    solution: {
      board: 
      [
        [0, 0, 0],
        [6, 0, 6],
        [0, 0, 0]
      ],
      firstPlace: 16,
      secondPlace: {17: 18, 19:1, 20:1},
      thirdPlace: {21: 1, 22:1, 23:1, 24: 1},
      max: 16,
      solutionSequence: [{"x":"0","y":"0"},{"x":"1","y":"0"},{"x":"2","y":"0"},{"x":"0","y":"0"},{"x":"0","y":"2"},{"x":"1","y":"2"},{"x":"1","y":"1"},{"x":"0","y":"1"},{"x":"2","y":"1"},{"x":"0","y":"1"},{"x":"2","y":"1"},{"x":"2","y":"2"}]
    },
    board: 
    [
      [0, 0, 0],
      [6, 0, 6],
      [0, 0, 0]
    ],
  },
  { // 4
    width: 3,
    height: 3,
    solution: {
      board: 
      [
        [0, 5, 6],
        [6, 0, 0],
        [0, 0, 5]
      ],
      firstPlace: 16,
      secondPlace: {17: 1, 18:1, 19:1},
      thirdPlace: {20: 1, 21:1, 22:1},
      max: 23,
      solutionSequence: [{"x":"0","y":"0"},{"x":"2","y":"0"},{"x":"0","y":"0"},{"x":"2","y":"0"},{"x":"2","y":"1"},{"x":"0","y":"1"},{"x":"1","y":"1"},{"x":"0","y":"1"},{"x":"0","y":"2"},{"x":"1","y":"2"}]
    },
    board: 
    [
      [0, 5, 6],
      [6, 0, 0],
      [0, 0, 5]
    ],
  },
      { 
    width: 4,
    height: 3,
    solution: {
      board: 
      [
        [0, 5, 0, 0],
        [5, 0, 5, 0],
        [0, 0, 0, 5]
      ],
      firstPlace: 14,
      secondPlace: {15: 1, 16: 1, 17:1, 18:1},
      thirdPlace: {19: 1, 21:1, 22:1, 23: 1},
      max: 26,
      solutionSequence: [{"x":"0","y":"0"},{"x":"0","y":"2"},{"x":"1","y":"2"},{"x":"1","y":"1"},{"x":"1","y":"2"},{"x":"0","y":"2"},{"x":"1","y":"2"},{"x":"0","y":"2"},{"x":"0","y":"0"},{"x":"0","y":"2"},{"x":"1","y":"2"},{"x":"2","y":"2"},{"x":"2","y":"0"},{"x":"3","y":"0"},{"x":"3","y":"1"}]
    },
    board: 
    [
      [0, 5, 0, 0],
      [5, 0, 5, 0],
      [0, 0, 0, 5]
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