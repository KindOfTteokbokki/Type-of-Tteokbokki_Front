import React from 'react';
import * as S from '../style';
import { StoreProps } from './ChainStoreView';
import store from '../../../assets/아이콘/가게명.svg';
import menu from '../../../assets/아이콘/메뉴명.svg';
import location from '../../../assets/아이콘/위치.svg';
import review from '../../../assets/아이콘/한줄평.svg';

export default function NonChainStore(props: StoreProps) {
	return (
		<S.LoadText borderRadius={props.borderRadius}>
			<S.TextCont>
				<S.Icon src={store} alt="가게명" />
				<S.Text>{props.storeData.store_name}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={menu} alt="메뉴명" />
				<S.Text>{props.storeData.menu_name}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={location} alt="위치" />
				<S.Text>{props.storeData.store_address}</S.Text>
			</S.TextCont>
			<S.TextCont>
				<S.Icon src={review} alt="한줄평" />
				<S.Text>{props.storeData.review}</S.Text>
			</S.TextCont>
		</S.LoadText>
	);
}
