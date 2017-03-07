import * as reducerType from '../../unit/reducerType';
import Level from '../../unit/level';

const initState = false;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.COL_CHANGE:
      return action.data;
    default:
      return state;
  }
};

export default reducer;