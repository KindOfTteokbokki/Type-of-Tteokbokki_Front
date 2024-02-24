import React from 'react';
import Navigation from '../Home/Navigation';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import * as S from './style';
import Back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';

interface TitleProps {
	name: string;
	count: number;
}

export default function TitleView(props: TitleProps) {
	return (
		<>
			<NavLayout>
				<S.Icon src={Back} />
				<S.Header>{`${props.name}가 모은`}</S.Header>
				<S.Header>{`칭호는 ${props.count}개야!`}</S.Header>
			</NavLayout>

			<Navigation />
		</>
	);
}
