/* eslint-disable no-unused-vars */
import ActionTypes from './ActionTypes';

const initialState = [];
const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKETS:
      return payload;
    default:
      return state;
  }
};
export default rocketReducer;
