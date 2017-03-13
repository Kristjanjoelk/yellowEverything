import * as reducerType from '../../unit/reducerType';
import Level from '../../unit/level';

const initState = (() => {
  const option = {
    currentLevel: 0,
    gameWidth: 3,
    gameHeight: 3,
    board: [],
    winState: false,
    moveCounter: 0,
  };
  return new Level(option);
})();

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.NEXT_LEVEL:
      return action.data;
    default:
      return state;
  }
};

export default reducer;