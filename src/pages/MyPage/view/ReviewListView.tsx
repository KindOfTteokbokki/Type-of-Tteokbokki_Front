import React from 'react';
import * as S from '../style';
import { ReviewListProps } from '../ReviewList';
import EachList from '../EachList';

export default function ReviewListView(props: ReviewListProps) {
	return (
		<S.MyReviewCont>
			{props.data.map((item, index) => {
				return <EachList item={item} index={index} length={props.data.length} />;
			})}
		</S.MyReviewCont>
	);
}
