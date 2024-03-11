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
	const imgUrl =
		props.data?.file_path && props.data?.file_path !== 'null'
			? props.data?.file_path + props.data?.file_masking_name
			: undefined;

	return (
		<S.DetailLayout>
			<S.DetailHeader>{props.header}</S.DetailHeader>
			<S.DetailLoadCont>
				{imgUrl ? <S.DetailImg src={imgUrl} alt="떡볶이 사진" /> : <S.EmptyImg />}
				<S.DetailText>
					<S.DetailIcon src={props.iconImg} alt="아이콘 사진" />
					<S.DetailContent>{props.data.content}</S.DetailContent>
				</S.DetailText>
			</S.DetailLoadCont>
			<Button onClick={props.onClickBack} aria-label="확인 완료 버튼" />
		</S.DetailLayout>
	);
}
