import { combineReducers } from 'redux-immutable';
import cur from './cur';
import keyboard from './keyboard';
import level from './level';


const rootReducer = combineReducers({
  level,
  cur,
  keyboard
});

export default rootReducer;
