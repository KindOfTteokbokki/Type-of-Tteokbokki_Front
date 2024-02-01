import React from 'react';
import { Layout } from '../Splash/style';
import * as S from './style';
import { PopupHeader } from './style';

export interface Props {
	popUpHeader: string;
	popUpMessage: string;
	onClickMove(): void;
}
export default function PopupView(props: Props) {
	return (
		<Layout>
			<PopupHeader>{props.popUpHeader}</PopupHeader>
			<S.Cont>
				<S.Text>{props.popUpMessage}</S.Text>
				<S.HeadText>이 구역 순둥이</S.HeadText>
			</S.Cont>
			<S.Button onClick={props.onClickMove} />
		</Layout>
	);
}
