import React from 'react';
import Navigation from '../Home/Navigation';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import * as S from './style';
import Back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';

export default function TitleView() {
	return (
		<>
			<NavLayout>
				<S.Icon src={Back} />
				<S.Header></S.Header>
			</NavLayout>

			<Navigation />
		</>
	);
}
