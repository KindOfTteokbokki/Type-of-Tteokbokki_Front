import React, { useEffect } from 'react';
import { Main, Header, Icon, Text } from '../../Loading/style';
import * as S from '../style';
import icon from '../../../assets/Food-1.svg';
import { Props } from '../Loaded';
import BigWhiteButton from '../../../components/Button/BigWhiteButton/BigWhiteButton';
import BigRedButton from '../../../components/Button/BigRedButton/BigRedButton';
import ChainStoreView from './ChainStoreView';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../store';
import NonChainStore from './NonChainStore';

export default function LoadedView(props: any) {
	// const storeData = useSelector((state: any) => {
	// 	return state.store.value;
	// });

	console.log(props.data);
	return (
		<S.Main>
			<Header>
				<Icon src={icon} alt="밥그릇 아이콘" />
				{props.loadedHeader}
			</Header>
			<Text>{props.loadedMessage}</Text>
			<S.LoadCont>
				<S.LoadImg src={props.data?.file_path + props.data?.file_masking_name} />
				{props.data?.location ? <NonChainStore storeData={props.data} /> : <ChainStoreView storeData={props.data} />}
			</S.LoadCont>
			<S.ButtonLayout>
				<BigWhiteButton text="다시 고르기" onclick={props.onClickReturn} />
				<BigRedButton text="완료하기" onclick={props.onClickModal} />
			</S.ButtonLayout>
			{props.renderModal()}
		</S.Main>
	);
}
