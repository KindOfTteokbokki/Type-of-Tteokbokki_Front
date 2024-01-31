import React from 'react';
import { Main, Header, Icon, Text } from '../Loading/style';
import * as S from './style';
import icon from '../../assets/Food-1.svg';
import house from '../../assets/House.svg';
import { Props } from './Loaded';
import { constants } from '../../constants/constants';

export default function LoadedView(props: Props) {
	return (
		<Main>
			<Header>
				<Icon src={icon} alt="밥그릇 아이콘" />
				{props.loadedHeader}
			</Header>
			<Text>{props.loadedMessage}</Text>

			<S.LoadCont>
				<S.LoadText>
					<div>
						<S.Icon src={house} alt="가게명" />
						<S.Text>{constants.LOADED.NAME}</S.Text>
					</div>
					<div>
						<S.Icon src={house} alt="메뉴명" />
						<S.Text>{constants.LOADED.MENU}</S.Text>
					</div>
					<div>
						<S.Icon src={house} alt="위치" />
						<S.Text>{constants.LOADED.LOCATION}</S.Text>
					</div>
					<div>
						<S.Icon src={house} alt="한줄평" />
						<S.Text>{constants.LOADED.REVIEW}</S.Text>
					</div>
				</S.LoadText>
			</S.LoadCont>
		</Main>
	);
}
