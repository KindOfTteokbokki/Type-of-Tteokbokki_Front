import React from 'react';
import { Header, Icon, Text } from '../../Loading/style';
import * as S from '../style';
import icon from '../../../assets/Food-1.svg';
import BigWhiteButton from '../../../components/Button/BigWhiteButton/BigWhiteButton';
import BigRedButton from '../../../components/Button/BigRedButton/BigRedButton';
import ChainStoreView from './ChainStoreView';
import NonChainStore from './NonChainStore';
import Modal from '../Modal/Modal';
import { Action } from '../../../slice/findStoreSlice';

export interface LoadedProps {
	loadedHeader: string;
	loadedMessage: string;
	onClickReturn(): void;
	onClickModal(): void;
	renderModal(): boolean;
	onClickAgreement(): void;
	data: Action;
	isNonChainStore(): boolean;
	isNonData(): boolean;
}

export default function LoadedView(props: LoadedProps) {
	return (
		<S.Main>
			<Header>
				<Icon src={icon} alt="밥그릇 아이콘" />
				{props.loadedHeader}
			</Header>
			<Text>{props.loadedMessage}</Text>
			<S.LoadCont>
				{props.isNonChainStore() ? (
					<S.NonChainImg src={props.data.file_path + props.data.file_masking_name} />
				) : props.isNonData() ? (
					<S.ChainImg src={props.data.file_path + props.data.file_masking_name} />
				) : null}

				{props.isNonChainStore() ? <NonChainStore storeData={props.data} /> : <ChainStoreView storeData={props.data} />}
			</S.LoadCont>
			<S.ButtonLayout>
				<BigWhiteButton text="다시 고르기" onclick={props.onClickReturn} />
				<BigRedButton text="완료하기" onclick={props.onClickModal} />
			</S.ButtonLayout>
			{props.renderModal() ? (
				<Modal onClickModal={props.onClickModal} onClickAgreement={props.onClickAgreement} />
			) : null}
		</S.Main>
	);
}
