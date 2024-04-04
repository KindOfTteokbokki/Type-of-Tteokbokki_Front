import React from 'react';
import * as S from '../style';
import EachList from '../EachList';

export interface Recommend {
	reviewData: {
		content: string;
		create_date: string;
		file_masking_name: string | null;
		file_original_name: string | null;
		file_path: string;
		my_recommend: boolean;
		review_seq: number;
		user_id: string | null;
	};
}

export interface RecommendListProps {
	reviewData: Recommend['reviewData'][];
	setKeyBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RecommendListView(props: RecommendListProps) {
	return (
		<S.RecommCont id="container">
			{props.reviewData?.map((data: any) => {
				return <EachList data={data} key={data.review_seq} />;
			})}
			<div id="observer" />
			<S.Button
				onClick={() => {
					props.setKeyBoard(true);
				}}
			/>
		</S.RecommCont>
	);
}
