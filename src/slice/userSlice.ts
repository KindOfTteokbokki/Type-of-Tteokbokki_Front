import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value:
			'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNzEwMzQwOTUyfQ.kAPxaYD9PacZ2bm6c9Rj0HrdiTuqBbCCnDax-k2ZFoIm5pCvoYzO4FeVLErPKQagj1pTnDG007hS8Ym1Wds4_g',
	},
	reducers: {
		setUserToken(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
	},
});

export let { setUserToken } = userSlice.actions;
