import React from 'react';
import * as S from '../style';
import house from '../../../assets/House.svg';
import { constants } from '../../../constants/constants';

export default function NonChainStore() {
	return (
		<S.LoadText>
			<S.TextCont>
				<S.Icon src={house} alt="가게명" />
				<S.Text>{constants.LOADED.NAME}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={house} alt="메뉴명" />
				<S.Text>{constants.LOADED.MENU}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={house} alt="위치" />
				<S.Text>{constants.LOADED.LOCATION}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={house} alt="한줄평" />
				<S.Text>{constants.LOADED.REVIEW}</S.Text>
			</S.TextCont>
		</S.LoadText>
	);
}
