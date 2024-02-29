import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value:
			'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzA5MTgzODE2fQ.3uiCZnLbNfWYXCH6WKWACb0hUg8rmFmi26A6AHvuiz1-Fuy-7ixA6DdVE2QtkDi12H0vNl5ReE2MWxMU0-n-2w',
	},
	reducers: {
		setUserToken(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
	},
});

export let { setUserToken } = userSlice.actions;
