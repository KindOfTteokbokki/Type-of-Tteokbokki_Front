import React from 'react';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import Navigation from '../../components/Navigation/Navigation';
import * as S from './style';
import { Icon } from '../Title/style';
import lock from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import { constants } from '../../constants/constants';

interface Props {
	onClickMoveBack: () => void;
}

export default function LockedTitleView(props: Props) {
	return (
		<>
			<NavLayout>
				<Icon src={lock} onClick={props.onClickMoveBack} />
				<S.Header>
					<div>
						<S.H1>{constants.LOCKED_TITLE.header[0]}</S.H1>
						<S.H1>{constants.LOCKED_TITLE.header[1]}</S.H1>
					</div>
					<S.Button>{constants.LOCKED_TITLE.button}</S.Button>
				</S.Header>
			</NavLayout>
			<Navigation />
		</>
	);
}
