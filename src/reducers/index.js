import { combineReducers } from 'redux';
import CalculatorReducer from './CalculatorReducer';

// Combine the reducers
export default combineReducers({
  calculator: CalculatorReducer
});