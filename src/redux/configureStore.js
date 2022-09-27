import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketReducer';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
