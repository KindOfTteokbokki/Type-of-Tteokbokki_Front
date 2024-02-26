import React from 'react';
import MyPageView from './view/MyPageView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
	const navigate = useNavigate();

	const onClickMoveRecommend = () => {};

	return <MyPageView text={constants.MYPAGE} onClickMoveRecommend={onClickMoveRecommend} />;
}
