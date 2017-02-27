import { combineReducers } from 'redux-immutable';
import cur from './cur';
import keyboard from './keyboard';


const rootReducer = combineReducers({
  cur,
  keyboard
});

export default rootReducer;
