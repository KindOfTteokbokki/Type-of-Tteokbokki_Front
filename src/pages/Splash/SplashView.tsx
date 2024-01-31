import React from 'react';
import * as S from './style';
import BigRedShadowButton from '../../components/Button/BigRedShadowButton/BigRedShadowButton';

export interface Props {
	text: string;
	onClickMove(): void;
}

export default function SplashView(props: Props) {
	return (
		<S.Layout>
			<BigRedShadowButton text={props.text} onclick={props.onClickMove} />
		</S.Layout>
	);
}
