import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slice/userSlice';
import { userPickSlice } from './slice/userPickSlice';
import { findStoreSlice } from './slice/findStoreSlice';
import { findTitleSlice } from './slice/findTitleSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
};

const reducers = combineReducers({
	token: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: {
		persistedReducer,
		userPick: userPickSlice.reducer,
		store: findStoreSlice.reducer,
		title: findTitleSlice.reducer,
	},
});

export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
