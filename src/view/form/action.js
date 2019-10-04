import * as constants from 'constants/actions/mainActions';

export const addBooks = (payload) => {
  return {
    type: constants.ADD_ITEM_TO_LIST,
  }
}