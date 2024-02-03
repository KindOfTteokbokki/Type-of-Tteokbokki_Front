import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const titleInitialState = {
	title_name: '',
	file_path: '',
	file_masking_name: '',
	icorn_file_path: '',
	icorn_file_masking_name: '',
};

export interface Action {
	title_name: string;
	file_path: string;
	file_masking_name: string;
	icorn_file_path: string;
	icorn_file_masking_name: string;
}

export const findTitleSlice = createSlice({
	name: 'title',
	initialState: { value: titleInitialState },
	reducers: {
		addTitle(state, action: any) {
			state.value = action.payload;
		},
	},
});

export let { addTitle } = findTitleSlice.actions;
