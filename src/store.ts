import { configureStore } from '@reduxjs/toolkit';
import { userPickSlice } from './slice/userPickSlice';
import { findStoreSlice } from './slice/findStoreSlice';

const store = configureStore({
	reducer: {
		userPick: userPickSlice.reducer,
		store: findStoreSlice.reducer,
	},
});

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
