import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	popupSignin: boolean;
	popupSignup: boolean;
	user_id: string;
	username: string;
	isAdmin: boolean;
	email: string;
	token: string;
}

const initialState: AuthState = {
	popupSignin: false,
	popupSignup: false,
	user_id: "",
	username: "",
	isAdmin: false,
	email: "",
	token: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setPopupSignin: (state, actions: PayloadAction<boolean>) => {
			state.popupSignin = actions.payload;
		},
		setPopupSignup: (state, actions: PayloadAction<boolean>) => {
			state.popupSignup = actions.payload;
		},
		setUser: (
			state,
			actions: PayloadAction<{
				user_id: string;
				username: string;
				isAdmin: boolean;
				email: string;
				token: string;
			}>
		) => {
			state.user_id = actions.payload.user_id;
			state.username = actions.payload.username;
			state.isAdmin = actions.payload.isAdmin;
			state.email = actions.payload.email;
			state.token = actions.payload.token;
		},
	},
});

export const { setPopupSignin, setUser, setPopupSignup } = authSlice.actions;
export default authSlice.reducer;
