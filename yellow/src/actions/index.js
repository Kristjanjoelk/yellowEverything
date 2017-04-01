import keyboard from './keyboard';
import * as reducerType from '../unit/reducerType';
import Player from '../unit/player';
import Level from '../unit/level';
import Progress from '../unit/progress';

// todo: Maybe group these things into seperate files??

// eslint-disable-next-line
function movePlayer(option) {
  return {
    type: reducerType.MOVE_PLAYER,
    data: option.reset === true ? null : new Player(option),
  };
}

function addValue(option) {
  // console.log("inside addValue", option);
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
  // console.log("inside colChange actions", option);
  return {
    type: reducerType.COL_CHANGE,
    data: new Level(option),
  };
};

function getNextLevel(option) {
  // console.log("inside colChange actions", option);
  return {
    type: reducerType.NEXT_LEVEL,
    data: new Level(option),
  };
};


function resetPlayer(option) {
  // console.log("inside resetPlayer actions", option);
  return {
    type: reducerType.RESET_PLAYER,
    data: option.reset === true ? null : new Player(option),
  };
};

function setLevel(option) {
  console.log("inside setLevel actions", option);
  return {
    type: reducerType.SET_LEVEL,
    data: new Level(option),
  };
};

function resetLevel(option) {
  return {
    type: reducerType.RESET_LEVEL,
    data: new Level(option),
  };
};

function invalidMove(option) {
  return {
    type: reducerType.INVALID_MOVE,
    data: new Player(option),
  };
};

function addBoard(option) {
  return {
    type: reducerType.ADD_BOARD,
    data: new Progress(option),
  };
}


function setNextMap(option) {
  return {
    type: reducerType.SET_NEXT,
    data: new Progress(option),
  };
}

function setPreviousMap(option) {
  return {
    type: reducerType.SET_PREV,
    data: new Progress(option),
  };
}


export default {
  addValue,
  movePlayer,
  keyboard,
  rowChange,
  colChange,
  getNextLevel,
  resetPlayer,
  resetLevel,
  invalidMove,
  addBoard,
  setNextMap,
  setPreviousMap,
  setLevel
};