import React from 'react';
import SplashView from './view/SplashView';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../constants/constants';
import { useSelector } from 'react-redux';

export default function Splash() {
	const navigator = useNavigate();

	const onClickMove = () => {
		navigator('/pick-types');
	};

	const selector = useSelector((state) => {
		return state;
	});
	console.log(selector);

	return <SplashView onClickMove={onClickMove} guestText={constants.SPLASH.GUEST} header={constants.SPLASH.header} />;
}
