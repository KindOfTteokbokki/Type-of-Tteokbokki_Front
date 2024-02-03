import React from 'react';
import * as S from './style';
import food from '../../assets/Food.svg';
import { Props } from './Loading';

export default function LoadingView(props: Props) {
	return (
		<S.Main>
			<S.Header>
				<S.Icon src={food} />
				{props.loadingHeader}
			</S.Header>
			<S.Text>{props.loadingMessage}</S.Text>
			<S.Img src={props.loadingImgUrl} alt="로딩 이미지" />
			<S.RedText>{props.loadingMessageBottom}</S.RedText>
		</S.Main>
	);
}
