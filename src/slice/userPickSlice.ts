import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response } from '../pages/PickTypes/PickTypes';
import { constants } from '../constants/constants';

interface State {
	[quesiton1: string]: Response;
}

const initialState: State = {
	question1: { code: constants.ANSWER_INIT.QUESTION1, name_ko: '' },
	question2: { code: constants.ANSWER_INIT.QUESTION2, name_ko: '' },
	question3: { code: constants.ANSWER_INIT.QUESTION3, name_ko: '' },
	question4: { code: constants.ANSWER_INIT.QUESTION4, name_ko: '' },
	question5: { code: constants.ANSWER_INIT.QUESTION5, name_ko: '' },
	question6: { code: constants.ANSWER_INIT.QUESTION6, name_ko: '' },
	question7: { code: constants.ANSWER_INIT.QUESTION7, name_ko: '' },
};

export const userPickSlice = createSlice({
	name: 'userPick',
	initialState: initialState,
	reducers: {
		addPickType(state, action: PayloadAction<[string, Response]>) {
			const key: string = `question${action.payload[0]}`;
			state[key].code = action.payload[1].code;
			state[key].name_ko = action.payload[1].name_ko;
		},
		deletePickType(state, action: PayloadAction<string>) {
			const key: string = `question${action.payload}`;
			state[key] = {
				code: `ch${action.payload}00`,
				name_ko: '',
			};
		},
	},
});

export let { addPickType, deletePickType } = userPickSlice.actions;
