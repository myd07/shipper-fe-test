import { SET_DRIVER_DATA, SET_DRIVER_IDS, SET_DRIVER_PAGE, SET_DRIVER_QUERY } from './actions';

const initialState = {
  data: {}, // FOR BEST PRACTICE USE IMMUTABLE JS LIBRARY, WE SKIP IT FOR THIS TEST DUE TO TIME SHORTAGE
  ids: [],
  limit: 5,
  page: 1,
  query: ''
};

export default function(state = initialState, action) {
  let newState = state;

  switch (action.type) {
  case SET_DRIVER_DATA:
    newState = {
      ...state,
      data: action.payload,
    };
    break;
  case SET_DRIVER_IDS:
    newState = {
      ...state,
      ids: action.payload,
    };
    break;
  case SET_DRIVER_PAGE:
    newState = {
      ...state,
      page: action.payload,
    };
    break;
  case SET_DRIVER_QUERY:
    newState = {
      ...state,
      query: action.payload,
    };
    break;
  default:
    newState = {
      ...state
    };
  }

  return newState;
}