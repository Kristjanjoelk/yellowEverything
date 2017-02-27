import keyboard from './keyboard';
import * as reducerType from '../unit/reducerType';
import Player from '../unit/player';

// eslint-disable-next-line
function movePlayer(option) {
  return {
    type: reducerType.MOVE_PLAYER,
    data: option.reset === true ? null : new Player(option),
  };
}

export default {
  movePlayer,
  keyboard
};