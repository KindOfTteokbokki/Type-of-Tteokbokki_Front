import React, { useState } from 'react';
import MyPageView from './view/MyPageView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
	const [data, setData] = useState(['후기', '후기', '후기']);
	const navigate = useNavigate();

	const onClickBack = () => {
		navigate(-1);
	};
	const onClickMoveProfileEdit = () => {
		navigate('/profile-edit');
	};

	const onClickMoveRecommend = () => {
		navigate('/recommend');
	};

	return (
		<MyPageView
			text={constants.MYPAGE}
			onClickBack={onClickBack}
			onClickMoveRecommend={onClickMoveRecommend}
			data={data}
			onClickMoveProfileEdit={onClickMoveProfileEdit}
		/>
	);
}
