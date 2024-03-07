import React from 'react';
import * as S from '../style';
import BasicImg from '../../../assets/기본이미지_테두리없.svg';

export interface EachListProps {
	data: any;
	onClickMoveDetail: () => void;
}

export default function EachListView(props: EachListProps) {
	return (
		<S.RecommList
			border={props.data.my_recommend ? '1px solid #D54400' : ''}
			role="review"
			onClick={props.onClickMoveDetail}
		>
			{props.data?.file_masking_name == null || props.data?.file_masking_name == 'null' ? (
				<>
					<S.RecommImg src={BasicImg} alt="기본 가래떡 아이콘" />
					<S.RecommText>{props.data?.content}</S.RecommText>
				</>
			) : (
				<>
					<S.RecommImg src={props.data?.file_path + props.data?.file_masking_name} />
					<S.RecommText>{props.data?.content}</S.RecommText>
				</>
			)}
		</S.RecommList>
	);
}
