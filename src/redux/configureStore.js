import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketReducer';
import missionsReducer from './mission/MissionReducer';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionsReducer,
  },
});

export default store;
