import { combineReducers } from 'redux-immutable';
import cur from './cur';
import keyboard from './keyboard';
import level from './level';
import progress from './progress';


const rootReducer = combineReducers({
  level,
  cur,
  keyboard,
  progress
});

export default rootReducer;
