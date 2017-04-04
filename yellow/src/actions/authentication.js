import * as reducerType from '../unit/reducerType';
import Auth from '../unit/auth';

function login(option) {
  return {
    type: reducerType.LOG_IN,
    data: new Auth(option),
  };
}

export default {
  login
};