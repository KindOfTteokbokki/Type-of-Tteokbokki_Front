import React from 'react';
import * as S from './style';
import { Button, Layout } from '../Popup/style';
import { constants } from '../../constants/constants';
import review from '../../assets/아이콘/하단내비_후기.svg';

interface RecommendDetailProps {
	onClickBack: () => void;
	data: any;
}

export default function RecommendDetailView(props: RecommendDetailProps) {
	return (
		<S.RecommendDetailLayout>
			<S.RecommendDetailHeader>{constants.RECOMMEND_DETAIL.header}</S.RecommendDetailHeader>
			<S.RecommendLoadCont>
				{props.data ? <S.RecommendImg /> : <S.EmptyImg />}
				<S.RecommendText>
					<S.RecommendIcon src={review} alt="리뷰 아이콘" />
					<S.RecommendContent></S.RecommendContent>
				</S.RecommendText>
			</S.RecommendLoadCont>
			<Button onClick={props.onClickBack} />
		</S.RecommendDetailLayout>
	);
}
