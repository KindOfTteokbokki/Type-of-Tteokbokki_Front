import React from 'react';
import * as S from '../style';
import EachList from '../EachList';

export interface RecommendListProps {
	reviewData: {
		content: string;
		create_date: string;
		file_masking_name: string | null;
		file_original_name: string | null;
		file_path: string;
		my_recommend: boolean;
		review_seq: number;
		user_id: string | null;
	}[];
}

export default function RecommendListView(props: RecommendListProps) {
	return (
		<S.RecommCont>
			{props.reviewData?.reverse().map((data: any) => {
				console.log(data);
				return <EachList data={data} />;
			})}
		</S.RecommCont>
	);
}
