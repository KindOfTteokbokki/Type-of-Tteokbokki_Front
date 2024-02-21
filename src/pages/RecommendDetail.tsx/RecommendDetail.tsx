import React, { useState } from 'react';
import RecommendDetailView from './RecommendDetailView';
import { useNavigate } from 'react-router-dom';

export default function RecommendDetail() {
	const [data, setData] = useState({});
	const navigator = useNavigate();

	const onClickBack = () => {
		navigator(-1);
	};

	return <RecommendDetailView onClickBack={onClickBack} data={data} />;
}
