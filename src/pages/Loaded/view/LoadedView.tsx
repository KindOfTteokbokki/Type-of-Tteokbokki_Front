import React, { useEffect } from 'react';
import { Main, Header, Icon, Text } from '../../Loading/style';
import * as S from '../style';
import icon from '../../../assets/Food-1.svg';
import { Props } from '../Loaded';
import BigWhiteButton from '../../../components/Button/BigWhiteButton/BigWhiteButton';
import BigRedButton from '../../../components/Button/BigRedButton/BigRedButton';
import ChainStoreView from './ChainStoreView';

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
				<BigRedButton text="완료하기" onclick={props.onClickModal} />
			</S.ButtonLayout>
			{props.renderModal()}
		</Main>
	);
}
