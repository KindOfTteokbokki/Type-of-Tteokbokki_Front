import React from 'react';
import { NavLayout } from '../../components/Layout/MainLayout.jsx/style';
import Navigation from '../../components/Navigation/Navigation';
import * as S from './style';
import { Icon } from '../Title/style';
import lock from '../../assets/아이콘_나도추천할래/뒤로가기.svg';
import { constants } from '../../constants/constants';

interface Props {
	onClickMoveBack: () => void;
	list: string[];
}

export default function LockedTitleView(props: Props) {
	return (
		<>
			<S.Layout>
				<S.BackIcon src={lock} onClick={props.onClickMoveBack} />
				<S.Header>
					<div>
						<S.H1>{constants.LOCKED_TITLE.header[0]}</S.H1>
						<S.H1>{constants.LOCKED_TITLE.header[1]}</S.H1>
					</div>
					<S.Button>{constants.LOCKED_TITLE.button}</S.Button>
				</S.Header>

				<S.Ul>
					{props.list.map((content, index) => {
						return (
							<>
								<S.Li role="list" key={index}>
									<Icon />
									<div>
										<S.H2>{content}</S.H2>
										<S.P>{Number(13948).toLocaleString() + '명이 받았어'}</S.P>
									</div>
								</S.Li>
							</>
						);
					})}
				</S.Ul>
			</S.Layout>
			<Navigation />
		</>
	);
}
