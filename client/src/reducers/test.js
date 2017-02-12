import { TEST } from '../constants/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case TEST:
      return action.test;
    default:
      return state;
  }
}