import axios from 'axios';
import { parseDriverData } from './dto';

export const SET_DRIVER_DATA_TYPE = 'SET_DRIVER_DATA';
export const SET_DRIVER_IDS_TYPE = 'SET_DRIVER_IDS';

export const setDriverIds = (payload) => {
  return {
    type: 'SET_DRIVER_IDS_TYPE',
    payload,
  };
};

export const setDriverData = (payload) => {
  return {
    type: SET_DRIVER_DATA_TYPE,
    payload,
  };
};

export const fetchDrivers = () => {
  return function(dispatch) {
    return axios({
      url: `${process.env.REACT_APP_API}`,
      params: {
        results: 30
      },
      method: 'GET'
    }).then(response => {
      const { data } = response;
      const parsed = parseDriverData(data.results);
      console.log(parsed);
      // DISPATCH DRIVER DATA
      dispatch(setDriverData(parsed.data));
      // DISPATCH DRIVER IDS
      dispatch(setDriverIds(parsed.ids));
    }).catch(error => {
      console.log('fetch driver error', error);
    });
  };
};