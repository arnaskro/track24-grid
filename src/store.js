import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/';

// Create middleware
// Thunk middleware allows to write action creators that return a function instead of an action
const middleware = applyMiddleware(thunk);


// Combine the reducers
const higherReducer = combineReducers({
  Grid: reducers
});

// Create the store object
const store = 
  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 
  createStore(
    higherReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
  ) : createStore(higherReducer, middleware);

export default store;