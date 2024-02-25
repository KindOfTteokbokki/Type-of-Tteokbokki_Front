import React from 'react';
import * as S from './style';
import { Icon } from '../Title/style';
import { BackButton } from '../Recommend/style';
import Navigation from '../../components/Navigation/Navigation';

interface MyPageProps {
	header: string;
}

export default function MyPageView(props: MyPageProps) {
	return (
		<>
			<S.Section>
				<S.Header role="heading">
					<BackButton />
					{props.header}
				</S.Header>
			</S.Section>
			<Navigation />
		</>
	);
}
