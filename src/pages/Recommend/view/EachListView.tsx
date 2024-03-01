import React from 'react';
import * as S from '../style';

export interface EachListProps {
	data: any;
	onClickMoveDetail: (id: string) => void;
}

export default function EachListView(props: EachListProps) {
	return (
		<S.RecommList
			border={props.data.my_recommend ? `1px solid ${(props: any) => props.theme.color.main}` : ''}
			role="review"
			onClick={() => {
				props.onClickMoveDetail(props.data);
			}}
		>
			{props.data?.file_masking_name === null ? (
				<S.ReCommOnlyText border={props.data.my_recommend ? `1px solid ${(props: any) => props.theme.color.main}` : ''}>
					{props.data.content}
				</S.ReCommOnlyText>
			) : (
				<>
					<S.RecommImg src={props.data?.file_path + props.data?.file_masking_name} />
					<S.RecommText>{props.data?.content}</S.RecommText>
				</>
			)}
		</S.RecommList>
	);
}
