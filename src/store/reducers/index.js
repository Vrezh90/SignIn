import * as actionTypes from '../actions/action-types';

const initialState = {
  examResult: null,
  token: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EXAM_RESULT: {
      return {
        ...state,
        examResult: action.payload
      };
    }
    case actionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      };
    }
    default:
      return state;
  }
};

export default appReducer;
