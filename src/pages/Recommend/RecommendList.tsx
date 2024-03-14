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
	const [reviewData, setReviewData] = useState<any>([]);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});
	const [page, setPage] = useState(0);

	const [isLoading, setIsLoading] = useState(false);

	const options = {
		root: document.getElementById('container'),
		rootMargin: '0px 0px 0px 0px',
		threshold: 0,
	};

	const onIntersect = async (entries: IntersectionObserverEntry[]) => {
		const target = entries[0];

		if (target.isIntersecting) {
			console.log(target);
			setPage((page) => page + 1);

			console.log('페이지 추가됨');
		}
	};

	useEffect(() => {
		const element = document.getElementById('observer');
		const observer = new IntersectionObserver(onIntersect, options);
		if (element) {
			observer.observe(element);
		}
	}, []);

	useEffect(() => {
		let postData = {
			pageNum: page,
			size: 15,
		};
		postFunc(postData, { Authorization: `Bearer ${token}` }).then((res: any) => {
			setReviewData([...reviewData, ...res?.data]);
		});
	}, [page]);

	return <RecommendListView reviewData={reviewData} setKeyBoard={props.setKeyBoard} />;
}
