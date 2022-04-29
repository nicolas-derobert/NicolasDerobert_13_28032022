
import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token:localStorage.getItem('token')
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload
      localStorage.setItem('token',state.token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('firstname')
      localStorage.removeItem('lastname')
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;