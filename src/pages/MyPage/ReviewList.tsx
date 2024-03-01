import React, { useEffect, useState } from 'react';
import ReviewListView from './view/ReviewListView';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export interface ReviewListProps {
	data: string[];
}

export default function ReviewList(props: ReviewListProps) {
	const [reviewData, setReviewData] = useState([]);

	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});
	const postFunc = usePost(`${baseUrl}/getRecommendToPageInMyinfo`);
	useEffect(() => {
		postFunc({ pageNum: 0, size: 15 }, { Authorization: `Bearer ${token}` }).then((res: any) => {
			setReviewData(res.data);
		});
	}, []);

	return <ReviewListView reviewData={reviewData} />;
}
