import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
	firstName: localStorage.getItem("firstname"),
	lastName: localStorage.getItem("lastName"),
};

const profileSlice = createSlice({
	name: "profile",
	initialState: initialProfileState,
	reducers: {
		setProfile(state, action) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			localStorage.setItem("firstname", action.payload.firstName);
			localStorage.setItem("lastname", action.payload.lastName);
		},
		removeProfile(state) {
			state.firstName = "";
			state.firstName = "";
			localStorage.removeItem("firstname");
			localStorage.removeItem("lastName");
		},
	},
});

export const authProfile = profileSlice.actions;

export default profileSlice.reducer;
