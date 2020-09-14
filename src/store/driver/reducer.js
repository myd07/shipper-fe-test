const initialState = {
  data: {},
  driverIds: [],
};

export default function(state = initialState, action) {
  let newState = state;

  switch (action.type) {
  // case 'MAP_LIST_TO_STORE':
  //   newState = {
  //     ...state,
  //     list: action.payload,
  //   }
  //   break;
  // case 'MAP_CITY_TO_STORE':
  //   newState = {
  //     ...state,
  //     city: action.payload,
  //   }
  //   break;
  default:
    newState = {
      ...state
    };
  }

  return newState;
}