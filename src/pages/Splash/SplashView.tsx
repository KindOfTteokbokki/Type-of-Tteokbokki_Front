import React from 'react';
import * as S from './style';
import BigRedButton from '../../components/Button/BigRedButton/BigRedButton';

export default function SplashView() {
	return (
		<S.Layout>
			<BigRedButton text="시작하기" />
		</S.Layout>
	);
}
