import React from 'react';
import * as S from '../style';
import { Recommend } from './RecommendListView';

export interface EachListProps {
	data: Recommend['reviewData'];
	onClickMoveDetail: () => void;
	isImageData: () => boolean;
}

export default function EachListView(props: EachListProps) {
	return (
		<S.RecommList
			$border={props.data.my_recommend ? '1px solid #D54400' : ''}
			role="review"
			onClick={props.onClickMoveDetail}
		>
			<picture>
				<S.RecommImg
					src={props.isImageData() ? props.data.file_path + props.data.file_masking_name : '/basic.svg'}
					alt={props.data.file_original_name ? props.data.file_original_name : '기본 가래떡 아이콘'}
				/>
			</picture>

			<S.RecommText>{props.data.content}</S.RecommText>
		</S.RecommList>
	);
}
