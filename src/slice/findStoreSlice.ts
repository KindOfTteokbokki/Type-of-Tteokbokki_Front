import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: Action = {
	store_name: '',
	store_address: '' || undefined,
	menu_name: '',
	review: '',
	file_path: '',
	file_masking_name: '',
	store_seq: -1,
};

export interface Action {
	store_name: string;
	store_address?: string;
	menu_name: string;
	review: string;
	file_path: string;
	file_masking_name: string;
	store_seq: number;
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
