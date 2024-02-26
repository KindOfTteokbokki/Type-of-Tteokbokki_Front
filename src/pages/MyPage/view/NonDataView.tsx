import React from 'react';
import * as S from '../style';
import { RedButton } from '../../../components/Button/RedButton/style';
import { MyPageProps } from './MyPageView';

interface NonDataViewProps {
	text: {
		NON_DATA: string;
		RECOMMEND_BUTTON: string;
	};
	onClickMoveRecommend: () => void;
}

export default function NonDataView(props: NonDataViewProps) {
	return (
		<>
			<S.EmptyText>{props.text.NON_DATA}</S.EmptyText>
			<RedButton onClick={props.onClickMoveRecommend}>{props.text.RECOMMEND_BUTTON}</RedButton>
		</>
	);
}
