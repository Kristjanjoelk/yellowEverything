import { combineReducers } from 'redux-immutable';
import down from './down';
import left from './left';
import right from './right';
import up from './up';

const keyboardReducer = combineReducers({
  down,
  left,
  right,
  up,
});

export default keyboardReducer;