import types from '../constants/Calculator';

export const add = (value = 0) => {
    return function (dispatch) {
      dispatch({
        type: types.INCREASE,
        payload: value
      });
    };
};
  
export const subtract = (value = 0) => {
    return function (dispatch) {
        dispatch({
        type: types.DECREASE,
        payload: value
        });
    };
};

export default {
    add, 
    subtract
}