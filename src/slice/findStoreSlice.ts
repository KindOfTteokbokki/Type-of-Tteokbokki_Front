import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
	store_name: '',
	store_address: '',
	menu_name: '',
	review: '',
	file_path: '',
	file_masking_name: '',
};

export interface Action {
	store_name: string;
	store_address: string;
	menu_name: string;
	review: string;
	file_path: string;
	file_masking_name: string;
}

export const findStoreSlice = createSlice({
	name: 'findStore',
	initialState: { value: initialState },
	reducers: {
		addStore(state, action: PayloadAction<Action>) {
			state.value = action.payload;
		},
	},
});

export const { addStore } = findStoreSlice.actions;
