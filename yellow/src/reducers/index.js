import { combineReducers } from 'redux-immutable';
import cur from './cur';
import keyboard from './keyboard';
import level from './level';
import progress from './progress';
import auth from './auth';

const rootReducer = combineReducers({
  level,
  cur,
  keyboard,
  progress,
  auth
});

export default rootReducer;
