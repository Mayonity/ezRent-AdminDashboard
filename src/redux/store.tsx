import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from "./Auth/authReducer";
import categoryReducer from './Category/categoryReducer';
import userReducer from './User/userReducer';
import productReducer from './Product/productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category : categoryReducer,
  user : userReducer,
  product : productReducer
  // add other reducers here
});

export const store = configureStore({
  reducer : rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;