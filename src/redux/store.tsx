import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from "./Auth/authReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here
});

export const store = configureStore({
  reducer : rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;