import React from 'react';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import Navigation from '../../components/Navigation/Navigation';
import * as S from './style';
import { Icon } from '../Title/style';
import lock from '../../assets/아이콘_나도추천할래/뒤로가기.svg';

interface Props {
	onClickMoveBack: () => void;
}

export default function LockedTitleView(props: Props) {
	return (
		<>
			<NavLayout>
				<Icon src={lock} onClick={props.onClickMoveBack} />
			</NavLayout>
			<Navigation />
		</>
	);
}
