import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketReducer';
import missionReducer from './mission/MissionReducer';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
