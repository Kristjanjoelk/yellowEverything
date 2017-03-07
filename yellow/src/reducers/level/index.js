// import { combineReducers } from 'redux-immutable';
// import colChange from './colChange';
// import rowChange from './rowChange';
// import addValue from './addValue';

// const levelReducer = combineReducers({
//   colChange,
//   rowChange,
//   addValue,
// });

// export default levelReducer;

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
    case reducerType.ROW_CHANGE:
        return action.data;
    case reducerType.COL_CHANGE:
        return action.data;
    default:
      return state;
  }
};

export default level;