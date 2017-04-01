import * as reducerType from '../../unit/reducerType';
import Progress from '../../unit/progress';

const initState = (() => {
  const option = {
      boards: [],
      currentBoardIndex: -1,
      totalMoves: 0
  };
  return new Progress(option);
})();

const level = (state = initState, action) => {
  switch (action.type) {
    case reducerType.ADD_BOARD:
      return action.data;
    case reducerType.SET_NEXT:
      return action.data;
    case reducerType.SET_PREV:
      return action.data;
    default:
      return state;
  }
};

export default level;