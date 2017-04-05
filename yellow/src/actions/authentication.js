import * as reducerType from '../unit/reducerType';
import Auth from '../unit/auth';

function login(option) {
  return {
    type: reducerType.LOG_IN,
    data: new Auth(option),
  };
}

function logout(option) {
  return {
    type: reducerType.LOG_OUT,
    data: new Auth(option),
  };
}

function setUser(option) {
  return {
    type: reducerType.SET_USER,
    data: new Auth(option),
  };
}

export default {
  login,
  logout,
  setUser
};