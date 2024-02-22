import React from 'react';
import * as S from '../../pages/RecommendDetail.tsx/style';
import { Button, Layout } from '../../pages/Popup/style';
import { constants } from '../../constants/constants';

interface RecommendDetailProps {
	onClickBack: () => void;
	data: any;
	altText: string;
	header: string;
	iconImg: string;
}

export default function DetailView(props: RecommendDetailProps) {
	return (
		<S.RecommendDetailLayout>
			<S.RecommendDetailHeader>{props.header}</S.RecommendDetailHeader>
			<S.RecommendLoadCont>
				{props.data ? <S.RecommendImg /> : <S.EmptyImg />}
				<S.RecommendText>
					<S.RecommendIcon src={props.iconImg} alt={props.altText} />
					<S.RecommendContent></S.RecommendContent>
				</S.RecommendText>
			</S.RecommendLoadCont>
			<Button onClick={props.onClickBack} />
		</S.RecommendDetailLayout>
	);
}
