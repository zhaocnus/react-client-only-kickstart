import { combineReducers } from 'redux';
import test from './test';

const rootReducer = combineReducers({
  test: test
});

export default rootReducer