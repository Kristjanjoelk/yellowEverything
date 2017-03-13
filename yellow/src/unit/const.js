const StorageKey = 'REACT_TETRIS';

const gameLevels = [
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
];

module.exports = {
  StorageKey,
  gameLevels,
};