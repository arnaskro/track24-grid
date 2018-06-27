import types from '../constants/Calculator';

export const initialState = {
    value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
        return {
            ...state,
            value: state.value + action.payload
        }
    case types.DECREASE:
        return {
            ...state,
            value: state.value - action.payload
        }
    default: 
        return state;
  }
};