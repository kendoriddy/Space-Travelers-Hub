/* eslint-disable no-unused-vars */
import ActionTypes from './ActionTypes';

const initialState = [];
const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKETS:
      return payload;
    case ActionTypes.RESERVED_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};
export default rocketReducer;
