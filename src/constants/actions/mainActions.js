import axios from 'axios';

export const MAP_LIST = (payload) => {
  return {
    type: 'MAP_LIST_TO_STORE',
    payload,
  }
}

export const MAP_CITY = (payload) => {
  return {
    type: 'MAP_CITY_TO_STORE',
    payload,
  }
}

export const FETCH_LIST = (city) => {
  return function(dispatch) {
    return axios({
      url: `${process.env.REACT_APP_API}?id=${city}&q=&mode=json&units=metric&cnt=5&appid=271da6b323b05ebaf2b4aaa0f3378f89`,
      method: 'GET'
    })
    .then(response => {
      const { data } = response;
      dispatch(MAP_LIST(data.list));
      dispatch(MAP_CITY(data.city.name));
    })
    .catch(error => {
      console.log(error);
    })
  }
}