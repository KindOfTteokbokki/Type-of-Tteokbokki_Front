import React from 'react';
import { Main, Header, Icon, Text } from '../../Loading/style';
import * as S from '../style';
import icon from '../../../assets/Food-1.svg';
import { Props } from '../Loaded';
import food from '../../assets/cheesy-tokbokki-korean-traditional-food-on-black-board-background-lunch-dish 1.png';
import BigWhiteButton from '../../../components/Button/BigWhiteButton/BigWhiteButton';
import BigRedButton from '../../../components/Button/BigRedButton/BigRedButton';
import ChainStoreView from './ChainStoreView';
import NonChainStore from './NonChainStore';
import Modal from './Modal';

export default function LoadedView(props: Props) {
	return (
		<Main>
			<Header>
				<Icon src={icon} alt="밥그릇 아이콘" />
				{props.loadedHeader}
			</Header>
			<Text>{props.loadedMessage}</Text>
			<S.LoadCont>
				<ChainStoreView />
			</S.LoadCont>
			<S.ButtonLayout>
				<BigWhiteButton text="다시 고르기" onclick={props.onClickReturn} />
				<BigRedButton text="완료하기" onclick={props.onClickMove} />
			</S.ButtonLayout>

			<Modal
				modalHeader={props.modalHeader}
				modalAnswerWhite={props.modalAnswerWhite}
				modalAnswerRed={props.modalAnswerRed}
			/>
		</Main>
	);
}
