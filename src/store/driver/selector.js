import { createSelector } from 'reselect';

const getDriverData = state => state.driver.data;
const getDriverIds = state => state.driver.ids;
const getLimit = state => state.driver.limit;
const getPage = state => state.driver.page;
const getQuery = state => state.driver.query;

export const makeGetDrivers = () =>
  createSelector([getDriverData, getDriverIds, getLimit, getPage, getQuery], (data, ids, limit, page, query) => {
    const newIds = [...ids];
    if (query && query !== '') {
      return newIds.map(id => data[id]).filter(driver => driver.fullname.toLowerCase().includes(query));
    } else {
      const total = limit * page;
      const filteredIds = newIds.slice(total - limit, total);
      return filteredIds.map(id => data[id]);
    }
  });
