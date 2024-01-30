import { configureStore } from '@reduxjs/toolkit';
import { userPickSlice } from './slice/userPickSlice';

const store = configureStore({
	reducer: {
		userPick: userPickSlice.reducer,
	},
});

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
