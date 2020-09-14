import { combineReducers } from 'redux';
import driverReducer from './driver/reducer';

const rootReducer = combineReducers({
  driver: driverReducer,
});

export default rootReducer;