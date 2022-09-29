// Actions
import ActionTypes from './ActionType';

// Action Creators

export function startLoadingMessions(result) {
  return { type: ActionTypes.START, value: result };
}

export function LoadMessions(result) {
  return { type: ActionTypes.LOAD, value: result };
}

export function addremoveMembertoMission(result) {
  return { type: ActionTypes.ADD_REMOVE_MEMBER, value: result };
}
