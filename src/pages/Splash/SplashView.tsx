import React from 'react';
import * as S from './style';
import BigRedButton from '../../components/Button/BigRedButton/BigRedButton';

export interface Props {
	text: string;
	onClickMove(): void;
}

export default function SplashView(props: Props) {
	return (
		<S.Layout>
			<BigRedButton text={props.text} onclick={props.onClickMove} />
		</S.Layout>
	);
}
