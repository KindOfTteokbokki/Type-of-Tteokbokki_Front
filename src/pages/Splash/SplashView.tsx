import React from 'react';
import * as S from './style';
import BigRedShadowButton from '../../components/Button/BigRedShadowButton/BigRedShadowButton';
import Logo from '../../assets/로고_스플래시1.svg';

export interface Props {
	text: string;
	onClickMove(): void;
}

export default function SplashView(props: Props) {
	return (
		<S.Layout>
			<S.Logo src={Logo} />
			<BigRedShadowButton text={props.text} onclick={props.onClickMove} />
		</S.Layout>
	);
}
