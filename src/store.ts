import { configureStore } from '@reduxjs/toolkit';
import { userPickSlice } from './slice/userPickSlice';
import { findStoreSlice } from './slice/findStoreSlice';
import { findTitleSlice } from './slice/findTitleSlice';

const store = configureStore({
	reducer: {
		userPick: userPickSlice.reducer,
		store: findStoreSlice.reducer,
		title: findTitleSlice.reducer,
	},
});

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
