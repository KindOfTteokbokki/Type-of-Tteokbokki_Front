import React, { useEffect, useState } from 'react';
import RecommendListView from './view/RecommendListView';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function RecommendList() {
	const postFunc = usePost(`${baseUrl}/getRecommendToPage`);
	const [reviewData, setReviewData] = useState([]);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const postData = {
		pageNum: 0,
		size: 100,
	};

	useEffect(() => {
		postFunc(postData, { Authorization: `Bearer ${token}` }).then((res) => {
			setReviewData(res?.data);
		});
	}, []);

	return <RecommendListView reviewData={reviewData} />;
}
