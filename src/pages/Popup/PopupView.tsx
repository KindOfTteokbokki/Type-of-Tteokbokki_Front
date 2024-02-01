import React from 'react';
import { Layout } from '../Splash/style';
import * as S from './style';
import { PopupHeader } from './style';

export default function PopupView() {
	return (
		<Layout>
			<PopupHeader>칭호를 획득했어!</PopupHeader>
			<S.Cont></S.Cont>
			<S.Button />
		</Layout>
	);
}
