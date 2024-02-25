import React from 'react';
import * as S from './style';
import { Icon } from '../Title/style';
import back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import Navigation from '../../components/Navigation/Navigation';

export default function MyPageView() {
	return (
		<>
			<S.Section>
				<Icon src={back} alt="뒤로가기" />
			</S.Section>
			<Navigation />
		</>
	);
}
