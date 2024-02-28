import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value:
			'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzA5MTIxNDg0fQ.PwlUxI_7WiyuDMoisveBdBAW7G9ISZEwd3gBYsl3wpTMKbTz4bYpfml2cN2I2WDeDEyF-4v0tibkT5wgog1mjQ',
	},
	reducers: {
		setUserToken(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
	},
});

export let { setUserToken } = userSlice.actions;
