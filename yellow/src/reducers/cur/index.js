import * as reducerType from '../../unit/reducerType';
import Player from '../../unit/player';

const initState = (() => {
  const option = {
    location: {
      x: 0,
      y: 0,
    },
    previousLoc: {
      x: 0,
      y: 0,
    },
    gameWidth: 3,
    gameHeight: 3
  };
  return new Player(option);
})();

const cur = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MOVE_PLAYER:
      return action.data;
    case reducerType.RESET_PLAYER:
      return action.data;
    case reducerType.INVALID_MOVE:
      return action.data;
    default:
      return state;
  }
};

export default cur;