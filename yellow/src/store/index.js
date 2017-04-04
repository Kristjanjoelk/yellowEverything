// eslint-disable-next-line
import { createStore, applyMiddleware, combineReducers} from 'redux'
// eslint-disable-next-line
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import { routerReducer } from 'react-router-redux'
// eslint-disable-next-line
const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer, 
    routerReducer,
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware
    )
);


export default store;