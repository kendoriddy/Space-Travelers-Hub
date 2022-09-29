// Actions
import Action from './ActionType';

const initialState = {
  missions: [],
  loading: true,
  error: null,
};
  // Reducer
export default function missionsReducer(state = initialState, ActionTypes = {}) {
  const { value } = ActionTypes;
  switch (ActionTypes.type) {
    case Action.START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Action.LOAD:
      return {
        ...state,
        loading: false,
        error: value.error,
        missions: value,
      };
    case Action.ADD_REMOVE_MEMBER:
      return {
        ...state,
        loading: false,
        error: value.error,
        missions: state.missions.map((mission) => {
          const prevValue = mission.isMember;
          if (mission.mission_id !== value) return mission;
          return { ...mission, isMember: !prevValue };
        }),
      };

    default:
      return state;
  }
}
