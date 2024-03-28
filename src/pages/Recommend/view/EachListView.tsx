import React from 'react';
import * as S from '../style';

export interface EachListProps {
	data: any;
	onClickMoveDetail: () => void;
	isImageData: () => boolean;
}

export default function EachListView(props: EachListProps) {
	return (
		<S.RecommList
			border={props.data.my_recommend ? '1px solid #D54400' : ''}
			role="review"
			onClick={props.onClickMoveDetail}
		>
			<picture>
				<source
					srcSet={props.isImageData() ? props.data.file_path + props.data.file_masking_name : '/basic.webp'}
					type={props.isImageData() ? '' : 'image/webp'}
					media={props.isImageData() ? '(max-width: 170px)' : '(max-width: 60px)'}
				/>
				<S.RecommImg
					src={props.isImageData() ? props.data.file_path + props.data.file_masking_name : '/basic.svg'}
					alt={props.isImageData() ? props.data.file_original_name : '기본 가래떡 아이콘'}
				/>
			</picture>

			<S.RecommText>{props.data.content}</S.RecommText>
		</S.RecommList>
	);
}
