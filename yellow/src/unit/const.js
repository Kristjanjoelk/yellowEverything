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
      secondPlace: [10,11,12],
      thirdPlace: [13,14,15],
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
      secondPlace: [7,8,9],
      thirdPlace: [10,11,12],
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
      secondPlace: [10,11,12],
      thirdPlace: [13,14,15],
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
      secondPlace: [10,11,12],
      thirdPlace: [13,14,15],
      max: 16,
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
      secondPlace: [14,15,16,17,18,19],
      thirdPlace: [20, 21, 22, 23, 24, 25],
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