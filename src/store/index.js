
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
import authReducer from './auth';


const store = configureStore({
  reducer: { profile: profileReducer, auth: authReducer },
});

export default store;
