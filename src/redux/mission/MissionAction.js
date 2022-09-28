import ActionTypes from './ActionType';

const setMission = (missions) => ({
  type: ActionTypes.ACTIVE_MEMBER,
  payload: missions,
});
export default setMission;
