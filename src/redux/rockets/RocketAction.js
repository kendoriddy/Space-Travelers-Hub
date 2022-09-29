import ActionTypes from './ActionTypes';

const setRocket = (rockets) => ({
  type: ActionTypes.SET_ROCKETS,
  payload: rockets,
});

export const bookRocket = (id) => ({
  type: ActionTypes.RESERVED_ROCKET,
  payload: id,
});

export default setRocket;
