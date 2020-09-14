import { SET_DRIVER_DATA_TYPE, SET_DRIVER_IDS_TYPE } from './actions';

const initialState = {
  data: {}, // FOR BEST PRACTICE USE IMMUTABLE JS LIBRARY, WE SKIP IT FOR THIS TEST DUE TO TIME SHORTAGE
  ids: [],
  limit: 5,
  page: 1,
};

export default function(state = initialState, action) {
  let newState = state;

  switch (action.type) {
  case SET_DRIVER_DATA_TYPE:
    newState = {
      ...state,
      data: action.payload,
    };
    break;
  case SET_DRIVER_IDS_TYPE:
    newState = {
      ...state,
      ids: action.payload,
    };
    break;
  default:
    newState = {
      ...state
    };
  }

  return newState;
}