import * as reducerType from '../../unit/reducerType';
import Level from '../../unit/level';

const initState = (() => {
  const option = {
    gameWidth: 3,
    gameHeight: 3,
    board: []
  };
  return new Level(option);
})();

const level = (state = initState, action) => {
  switch (action.type) {
    case reducerType.ADD_VALUE:
      return action.data;
    default:
      return state;
  }
};

export default level;