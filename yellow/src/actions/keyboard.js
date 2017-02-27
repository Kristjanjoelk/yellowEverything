import * as reducerType from '../unit/reducerType';

function down(data) {
  return {
    type: reducerType.KEY_DOWN,
    data,
  };
}

function left(data) {
  return {
    type: reducerType.KEY_LEFT,
    data,
  };
}

function right(data) {
  return {
    type: reducerType.KEY_RIGHT,
    data,
  };
}

function up(data) {
  return {
    type: reducerType.KEY_UP,
    data,
  };
}


export default {
  down,
  left,
  right,
  up,
};