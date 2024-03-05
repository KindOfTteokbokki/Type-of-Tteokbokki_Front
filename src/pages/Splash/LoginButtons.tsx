import React from 'react';
import LoginButtonsView from './view/LoginButtonsView';
import { constants } from '../../constants/constants';

export default function LoginButtons() {
	return (
		<LoginButtonsView
			kakaoText={constants.SPLASH.KAKAO}
			naverText={constants.SPLASH.NAVER}
			guestText={constants.SPLASH.GUEST}
		/>
	);
}
