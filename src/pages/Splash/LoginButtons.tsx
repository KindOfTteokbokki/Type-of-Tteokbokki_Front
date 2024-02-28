import React, { useEffect, useState } from 'react';
import LoginButtonsView from './view/LoginButtonsView';
import { constants } from '../../constants/constants';
import { useGet } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../slice/userSlice';

export default function LoginButtons() {
	return (
		<LoginButtonsView
			kakaoText={constants.SPLASH.KAKAO}
			naverText={constants.SPLASH.NAVER}
			guestText={constants.SPLASH.GUEST}
		/>
	);
}
