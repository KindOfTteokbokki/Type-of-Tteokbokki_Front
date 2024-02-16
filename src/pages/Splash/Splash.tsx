import React from 'react';
import SplashView from './SplashView';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../constants/constants';

export default function Splash() {
	const navigator = useNavigate();

	const onClickMove = () => {
		navigator('/pickTypes');
	};

	return (
		<SplashView
			onClickMove={onClickMove}
			kakaoText={constants.SPLASH.KAKAO}
			naverText={constants.SPLASH.NAVER}
			guestText={constants.SPLASH.GUEST}
		/>
	);
}
