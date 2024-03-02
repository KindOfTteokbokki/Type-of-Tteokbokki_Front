import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';

export default function useMoveLogin() {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	return <div>useMoveLogin</div>;
}
