
import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './profile';
import authReducer from './auth';


const store = configureStore({
  reducer: { counter: profileReducer, auth: authReducer },
});

export default store;
// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = { email: '', password:'', token:'', isLoggedIn: false };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// const store = configureStore({
//   reducer: counterSlice.reducer
// });

// export const counterActions = counterSlice.actions;

// export default store;




// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// const store = configureStore({
//   reducer: counterSlice.reducer
// });

// export const counterActions = counterSlice.actions;

// export default store;





////////////////////////

// import React, { useState } from 'react';

// const AuthContext = React.createContext({
//   token: '',
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });

// export const AuthContextProvider = (props) => {
//   const [token, setToken] = useState(null);

//   const userIsLoggedIn = !!token;

//   const loginHandler = (token) => {
//     setToken(token);
//   };

//   const logoutHandler = () => {
//     setToken(null);
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;