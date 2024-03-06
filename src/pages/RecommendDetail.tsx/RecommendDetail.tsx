import React, { useEffect, useState } from 'react';
import RecommendDetailView from '../../components/DetailView/DetailView';
import { useNavigate, useParams } from 'react-router-dom';
import { constants } from '../../constants/constants';
import review from '../../assets/아이콘/하단내비_후기.svg';
import { usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';

export default function RecommendDetail() {
	const postFunc = usePost(`${baseUrl}/ViewOneFromRecommend`);
	const { id } = useParams();
	const [data, setData] = useState({});
	const navigator = useNavigate();

	const onClickBack = () => {
		navigator(-1);
	};

	const header = constants.RECOMMEND_DETAIL.header;

	useEffect(() => {
		postFunc({ review_seq: id }).then((res: any) => {
			setData(res.data);
		});
	}, []);

	return <RecommendDetailView onClickBack={onClickBack} data={data} header={header} iconImg={review} />;
}
