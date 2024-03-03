import { useSelector } from 'react-redux';
import { RootStateType } from '../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function useMoveLogin() {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const navigator = useNavigate();

	useEffect(() => {
		if (!token) {
			navigator('/');
		}
	}, []);
}
