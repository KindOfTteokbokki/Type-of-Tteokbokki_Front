import React from 'react';
import SplashView from './SplashView';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
	const navigator = useNavigate();

	const onClickMove = () => {
		navigator('/pickTypes');
	};

	return <SplashView text="시작하기" onClickMove={onClickMove} />;
}
