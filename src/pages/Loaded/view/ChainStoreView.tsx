import React from 'react';
import * as S from '../style';
import house from '../../../assets/House.svg';
import { constants } from '../../../constants/constants';
import { Action } from '../../../slice/findStoreSlice';

interface Props {
	storeData: Action;
}

export default function ChainStoreView(props: any) {
	return (
		<S.LoadText>
			<S.TextCont>
				<S.Icon src={house} alt="가게명" />
				<S.Text>{props.storeData.store_name}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={house} alt="메뉴명" />
				<S.Text>{props.storeData.menu_name}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={house} alt="한줄평" />
				<S.Text>{props.storeData.review}</S.Text>
			</S.TextCont>
		</S.LoadText>
	);
}
