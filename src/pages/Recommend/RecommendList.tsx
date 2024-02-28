import React, { useEffect, useState } from 'react';
import RecommendListView from './view/RecommendListView';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function RecommendList() {
	const postFunc = usePost(`${baseUrl}/getRecommendToPage`);
	const [reviewData, setReviewData] = useState([]);

	const postData = {
		pageNum: 0,
		size: 15,
	};

	useEffect(() => {
		postFunc(postData).then((res) => {
			console.log(res?.data);
			setReviewData(res?.data);
		});
	}, []);

	return <RecommendListView reviewData={reviewData} />;
}
