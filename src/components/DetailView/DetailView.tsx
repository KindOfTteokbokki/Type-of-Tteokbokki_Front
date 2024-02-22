import React from 'react';
import * as S from './style';
import { Button, Layout } from '../../pages/Popup/style';
import { constants } from '../../constants/constants';

export interface DetailProps {
	onClickBack: () => void;
	data: any;
	header: string;
	iconImg: string;
}

export default function DetailView(props: DetailProps) {
	return (
		<S.DetailLayout>
			<S.DetailHeader>{props.header}</S.DetailHeader>
			<S.DetailLoadCont>
				{props.data ? <S.DetailImg /> : <S.EmptyImg />}
				<S.DetailText>
					<S.DetailIcon src={props.iconImg} alt="아이콘 사진" />
					<S.DetailContent></S.DetailContent>
				</S.DetailText>
			</S.DetailLoadCont>
			<Button onClick={props.onClickBack} />
		</S.DetailLayout>
	);
}
