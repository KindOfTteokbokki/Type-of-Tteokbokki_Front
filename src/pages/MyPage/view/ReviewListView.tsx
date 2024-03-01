import React from 'react';
import * as S from '../style';
import { ReviewListProps } from '../ReviewList';
import EachList from '../EachList';

export interface ReviewData {
	content: string;
	create_date: string;
	file_masking_name: string | null;
	file_original_name: string | null;
	file_path: string | null;
	my_recommend: boolean | null;
	review_seq: number;
	user_id: number;
}

export default function ReviewListView(props: { reviewData: ReviewData[] }) {
	return (
		<S.MyReviewCont>
			{props.reviewData.map((item: ReviewData, index: any) => {
				return <EachList item={item} index={index} length={props.reviewData.length} />;
			})}
		</S.MyReviewCont>
	);
}
