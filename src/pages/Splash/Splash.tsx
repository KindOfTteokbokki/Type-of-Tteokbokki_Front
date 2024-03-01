import React from 'react';
import SplashView from './view/SplashView';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function Splash() {
	const navigator = useNavigate();
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});
	console.log(token);

	const onClickMove = () => {
		navigator('/pick-types');
	};

	return <SplashView onClickMove={onClickMove} guestText={constants.SPLASH.GUEST} header={constants.SPLASH.header} />;
}
