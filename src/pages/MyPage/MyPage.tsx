import React, { useState } from 'react';
import MyPageView from './view/MyPageView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
	const [data, setData] = useState(['후기', '후기', '후기']);
	const navigate = useNavigate();
	const onClickMoveRecommend = () => {
		navigate('/recommend');
	};

	return <MyPageView text={constants.MYPAGE} onClickMoveRecommend={onClickMoveRecommend} data={data} />;
}
