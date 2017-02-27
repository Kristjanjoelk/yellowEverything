import * as reducerType from '../../unit/reducerType';
import Player from '../../unit/player';

const initState = (() => {
  const option = {
    location: 1
  };
  return new Player(option);
})();

const cur = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MOVE_PLAYER:
      return action.data;
    default:
      return state;
  }
};

export default cur;