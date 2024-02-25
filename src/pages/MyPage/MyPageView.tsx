import React from 'react';
import * as S from './style';
import { Icon } from '../Title/style';
import back from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import Navigation from '../../components/Navigation/Navigation';

interface MyPageProps {
	header: string;
}

export default function MyPageView(props: MyPageProps) {
	return (
		<>
			<S.Section>
				<S.Header role="heading">
					<Icon src={back} alt="뒤로가기" />
					{props.header}
				</S.Header>
			</S.Section>
			<Navigation />
		</>
	);
}
