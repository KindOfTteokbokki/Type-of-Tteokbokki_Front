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
	const [page, setPage] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const options = {
		root: null,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0,
	};

	const onIntersect = (entries: IntersectionObserverEntry[], observer: HTMLElement) => {
		const target = entries[0];
		if (target.isIntersecting && !isLoading) {
			setPage(page + 1);
		}
	};

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(onIntersect, options);
	// 	const element = document.getElementById('observer');
	// 	observer.observe(element);
	// }, []);

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
