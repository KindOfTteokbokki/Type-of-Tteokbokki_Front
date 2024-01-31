import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface State {
	[index: string]: string;
}

const initialState: State = {};

export const userPickSlice = createSlice({
	name: 'userPick',
	initialState: initialState,
	reducers: {
		addPickType(state, action: PayloadAction<string[]>) {
			const key = `question${action.payload[0]}`;
			state[key] = action.payload[1];
		},
		deletePickType(state, action: PayloadAction<string[]>) {
			const key = `${action.payload[0]}`;
			delete state[key];
		},
	},
});

export let { addPickType, deletePickType } = userPickSlice.actions;
