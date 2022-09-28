import ActionTypes from './ActionType';

const setMission = (missions) => ({
  type: ActionTypes.ACTIVE_MEMBER,
  payload: missions,
});

export const joinMission = (id) => ({
  type: ActionTypes.NOT_MEMBER,
  payload: id,
});
export default setMission;
