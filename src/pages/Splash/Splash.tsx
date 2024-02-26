import React from 'react';
import SplashView from './view/SplashView';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../constants/constants';

export default function Splash() {
	const navigator = useNavigate();

	const onClickMove = () => {
		navigator('/pick-types');
	};

	return <SplashView onClickMove={onClickMove} guestText={constants.SPLASH.GUEST} header={constants.SPLASH.header} />;
}
