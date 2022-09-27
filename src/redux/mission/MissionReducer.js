/* eslint-disable no-unused-vars */
import ActionTypes from './ActionType';

const initialState = [];
const missionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ACTIVE_MEMBER:
      return payload;
    default:
      return state;
  }
};
export default missionReducer;
