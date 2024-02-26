import React from 'react';
import * as S from '../style';
import { theme } from '../../../styles/theme';
import Icon from '../../../assets/내후기관리.svg';

interface EachListProps {
	isLastIndex: () => boolean;
}

export default function EachListView(props: EachListProps) {
	return (
		<S.MyReviewList border={props.isLastIndex() ? undefined : theme.color.gray}>
			<S.ReviewImg />
			<S.ReviewText>린ㅁ리ㅏㅁ리ㅏ거느ㅏㅣ라니니갸재기ㅡ핕</S.ReviewText>
			<S.ReviewIcon/>
		</S.MyReviewList>
	);
}
