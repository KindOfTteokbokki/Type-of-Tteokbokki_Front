import React, { useEffect, useState } from 'react';
import RecommendListView from './view/RecommendListView';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

interface RecommendListProps {
	setKeyBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RecommendList(props: RecommendListProps) {
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

	return <RecommendListView reviewData={reviewData} setKeyBoard={props.setKeyBoard} />;
}
