import ActionTypes from './ActionTypes';

const setRocket = (rockets) => ({
  type: ActionTypes.SET_ROCKETS,
  payload: rockets,
});
export default setRocket;
