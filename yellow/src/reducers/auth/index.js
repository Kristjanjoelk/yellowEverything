import * as reducerType from '../../unit/reducerType';
import Auth from '../../unit/auth';

const initState = (() => {
  const option = {
    isLoggedIn: true,
    user: {
      name: '',
      uid: ''
    }
  };
  return new Auth(option);
})();

const reducer = (state = initState, action) => {
   switch (action.type) {
    case reducerType.LOG_IN:
      return Object.assign({}, action.data, {isLoggedIn: true});
    case reducerType.LOG_OUT:
      return Object.assign({}, action.data, {isLoggedIn: false});
    case reducerType.SET_USER:
      return Object.assign({}, action.data, {isLoggedIn: true});
    default:
      return state;
  }
};

export default reducer;