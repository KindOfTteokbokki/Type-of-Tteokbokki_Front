import React, { useState } from 'react';
import RecommendDetailView from '../../components/DetailView/DetailView';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../constants/constants';
import review from '../../assets/아이콘/하단내비_후기.svg';

export default function RecommendDetail() {
	const [data, setData] = useState({});
	const navigator = useNavigate();

	const onClickBack = () => {
		navigator(-1);
	};

	const header = constants.RECOMMEND_DETAIL.header;

	return <RecommendDetailView onClickBack={onClickBack} data={data} header={header} iconImg={review} />;
}
