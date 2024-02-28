import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: { value: '' },
	reducers: {
		setUserToken(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
	},
});

export let { setUserToken } = userSlice.actions;
