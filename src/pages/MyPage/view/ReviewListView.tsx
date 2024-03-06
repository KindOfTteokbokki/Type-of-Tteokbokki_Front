import React from 'react';
import * as S from '../style';
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

interface ReviewListProps {
	reviewData: ReviewData[];
}

const data = {
	content: '',
	create_date: '',
	file_masking_name: '',
	file_original_name: '',
	file_path: '',
	my_recommend: false,
	review_seq: 1,
	user_id: 1,
};

export default function ReviewListView(props: ReviewListProps) {
	return (
		<S.MyReviewCont>
			{[1, 2, 3, 4, 5, 6].map((item, index) => {
				return <EachList item={data} index={index} length={6} />;
			})}
			{/* {props.reviewData.map((item: ReviewData, index: any) => {
				return <EachList item={item} index={index} length={props.reviewData.length} />;
			})} */}
		</S.MyReviewCont>
	);
}
