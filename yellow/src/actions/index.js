import keyboard from './keyboard';
import * as reducerType from '../unit/reducerType';
import Player from '../unit/player';
import Level from '../unit/level';

// eslint-disable-next-line
function movePlayer(option) {
  return {
    type: reducerType.MOVE_PLAYER,
    data: option.reset === true ? null : new Player(option),
  };
}

function addValue(option) {
  console.log("inside addValue", option);
  return {
    type: reducerType.ADD_VALUE,
    data: option.reset === true ? null : new Level(option),
  };
}

function rowChange(option){
    return {
    type: reducerType.ROW_CHANGE,
    data: new Level(option),
  };
};

function colChange(option) {
  console.log("inside colChange actions", option);
  return {
    type: reducerType.COL_CHANGE,
    data: new Level(option),
  };
};


export default {
  addValue,
  movePlayer,
  keyboard,
  rowChange,
  colChange,
};